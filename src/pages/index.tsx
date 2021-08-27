import clsx from 'clsx';
import { debounce } from 'lodash';
import type { GetStaticProps } from 'next';
import Head from 'next/head';
import { useEffect, useMemo } from 'react';
import { HiArrowUp, HiXCircle } from 'react-icons/hi';
import PerkGrid from '../features/PerkGrid';
import PerkInfo from '../features/PerkInfo';
import { useGetRatingsQuery } from '../redux/averageRatings';
import { setFilter, setFilterInputValue, toggleSelectedPerk } from '../redux/cheatsheet';
import { useDispatch, useSelector } from '../redux/hooks';
import { hydrateUserRatings } from '../redux/userRatings';
import useScrollPosition from '../utils/hooks';

const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/perks`);
  const perks = await res.json();

  return { props: { perks } };
};

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.cheatsheet.filterInputValue);

  const debouncedSetFilter = useMemo(
    () => debounce((filter) => dispatch(setFilter(filter)), 200),
    [dispatch]
  );

  const handleClear = () => {
    dispatch(setFilter(''));
    dispatch(setFilterInputValue(''));
  };

  return (
    <div className="relative text-black">
      <input
        className="w-full rounded px-1 py-0.5"
        value={value}
        onChange={(e) => {
          dispatch(setFilterInputValue(e.target.value));
          debouncedSetFilter(e.target.value);
        }}
      />
      {value && <HiXCircle className="w-5 h-5 absolute top-1 right-1.5" onClick={handleClear} />}
    </div>
  );
};

const ScrollToTopButton = () => {
  const scrollPosition = useScrollPosition();

  return (
    <button
      type="button"
      className={clsx(
        'w-12 h-12 p-2.5 fixed bottom-3 right-3 md:hidden rounded-full bg-blue-400 transition transform',
        'md:hidden',
        scrollPosition < 100 ? 'translate-y-6 opacity-0' : 'translate-y-0 opacity-100'
      )}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <HiArrowUp className="w-full h-full m-auto" />
    </button>
  );
};

const Index = ({ perks }: { perks: Perk[] }): JSX.Element => {
  const selectedPerk = useSelector((state) => state.cheatsheet.selectedPerk);
  const dispatch = useDispatch();

  useGetRatingsQuery();
  useEffect(() => {
    const userRatings = JSON.parse(localStorage.getItem('userRatings'));

    if (typeof userRatings === 'object' && userRatings !== null) {
      dispatch(hydrateUserRatings(userRatings));
    }
  }, [dispatch]);

  const handleCloseModal = () => {
    dispatch(toggleSelectedPerk(null));
  };

  return (
    <>
      <Head>
        <title>Dex by Daylight</title>
        <meta
          name="description"
          content="A reference website for perks in the game, Dead by Daylight."
        />
      </Head>
      <div className="p-2 border-b border-gray-700">
        <h1 className="text-4xl font-light">Dex by Daylight</h1>
      </div>
      <div className="flex p-2">
        <div className="flex-1">
          <div className="sticky top-0 z-10 md:hidden py-1 bg-black">
            <Filter />
          </div>
          <PerkGrid perks={perks} />
        </div>
        <div className="hidden md:block w-96 ml-2">
          <div className="sticky top-2">
            <Filter />
            {selectedPerk ? (
              <PerkInfo perk={selectedPerk} />
            ) : (
              <div className="w-full opacity-30">
                <img
                  className="m-auto"
                  src="/images/iconHelp_obsession.png"
                  alt="Click on a perk to see details."
                />
              </div>
            )}
          </div>
        </div>
      </div>
      {/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      {selectedPerk && (
        <div
          className="w-screen h-screen fixed top-0 left-0 z-40 md:hidden bg-black bg-opacity-50 flex flex-col justify-center p-2"
          onClick={handleCloseModal}
        >
          <div className="bg-black">
            <PerkInfo perk={selectedPerk} />
          </div>
          <div className="text-center">Click anywhere to close.</div>
        </div>
      )}
      {/* eslint-enable */}
      <ScrollToTopButton />
    </>
  );
};

export { getStaticProps };
export default Index;
