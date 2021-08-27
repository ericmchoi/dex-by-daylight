import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useState } from 'react';
import ratingApi from '../redux/averageRatings';
import { toggleSelectedPerk } from '../redux/cheatsheet';
import { useDispatch, useSelector } from '../redux/hooks';

const isPerkFiltered = (perk, filter) => {
  const perkText = (perk.name + perk.type + perk.tags + perk.owner?.name ?? '').toLowerCase();

  return !filter.split(/\s+/).reduce((prev, word) => prev && perkText.includes(word), true);
};

const tiers = [
  {
    color: 'text-gray-500',
    text: '-',
  },
  {
    color: 'text-yellow-900',
    text: 'D',
  },
  {
    color: 'text-green-700',
    text: 'C',
  },
  {
    color: 'text-blue-600',
    text: 'B',
  },
  {
    color: 'text-pink-600',
    text: 'A',
  },
  {
    color: 'text-yellow-500',
    text: 'S',
  },
];

const PerkGridItem = ({ perk, isAnimated }: { perk: Perk; isAnimated: boolean }) => {
  const filter = useSelector((state) => state.cheatsheet.filter).toLowerCase();

  const isSelected = useSelector((state) => state.cheatsheet.selectedPerk === perk);

  const userRating = useSelector((state) => state.userRatings[perk.id]) ?? 0;

  const averageRating = ratingApi.endpoints.getRatings.useQueryState(undefined, {
    selectFromResult: ({ data }) => data?.[perk.id] ?? 0,
  });

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleSelectedPerk(perk));
  };

  return (
    <motion.div className={clsx({ hidden: isPerkFiltered(perk, filter) })} layout={isAnimated}>
      <button
        className={clsx(
          'block relative w-full h-40 border rounded transition-transform transform',
          'hover:border-gray-500 hover:bg-gray-800 hover:scale-102',
          isSelected ? 'border-gray-600 bg-gray-800' : 'border-gray-800'
        )}
        type="button"
        onClick={handleClick}
      >
        <div className="h-full">
          <img
            className="mx-auto"
            src={`/images/perk/${perk.type}/${perk.owner ?? 'general'}/iconPerks_${
              perk.id
            }.png`}
            alt={perk.name}
            width="120"
            height="120"
          />
          <div
            className={clsx(
              'absolute top-1 left-2 text-lg font-bold italic',
              tiers[userRating || Math.round(averageRating)].color
            )}
          >
            {tiers[userRating || Math.round(averageRating)].text}
          </div>
          <div className="absolute bottom-0.5 w-full px-1 text-center">{perk.name}</div>
        </div>
      </button>
    </motion.div>
  );
};

const PerkGrid = ({ perks }: { perks: Perk[] }): JSX.Element => {
  const [isAnimated, setAnimated] = useState(true);

  const toggleAnimations = () => {
    setAnimated((prev) => !prev);
  };

  return (
    <>
      <div className="flex items-center py-0.5 justify-end mb-2">
        Animations:&nbsp;
        <button
          className={clsx(
            'flex justify-end items-center w-16 border rounded-full border-gray-600 p-0.5',
            isAnimated ? 'bg-gray-800' : 'flex-row-reverse'
          )}
          type="button"
          onClick={toggleAnimations}
        >
          <div className="flex-grow text-center leading-none">{isAnimated ? 'On' : 'Off'}</div>
          <div className="w-5 h-5 rounded-full bg-gray-500" />
        </button>
      </div>
      <div className="grid grid-cols-perk-grid content-start gap-2">
        {perks.map((perk) => (
          <PerkGridItem key={perk.id} perk={perk} isAnimated={isAnimated} />
        ))}
      </div>
    </>
  );
};

export default PerkGrid;
