import clsx from 'clsx';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import directive from 'remark-directive';
import ratingApi, { useAddRatingMutation } from '../redux/averageRatings';
import { useDispatch, useSelector } from '../redux/hooks';
import { setUserRating } from '../redux/userRatings';
import { CHARACTERS, STATUSES } from '../utils/constants';
import dbdDirectives from '../utils/markdown';

const Status = ({ id }) => {
  const { name = '', description = '' } = STATUSES[id];

  return (
    <span className="border-b border-dotted" title={description}>
      {name || id}
    </span>
  );
};

const Values = ({ values, unit }) => {
  const splitValues = values.split(' ');

  return (
    <strong>
      {splitValues[0] && <span className="text-yellow-400">{splitValues[0]}</span>}
      {splitValues[1] && (
        <>
          &nbsp;/&nbsp;<span className="text-yellow-400">{splitValues[1]}</span>
        </>
      )}
      {splitValues[2] && (
        <>
          &nbsp;/&nbsp;<span className="text-yellow-400">{splitValues[2]}</span>
        </>
      )}
      {unit && (
        <span className="text-yellow-400">
          {unit.length === 1 ? '' : '\xa0'}
          {unit}
        </span>
      )}
    </strong>
  );
};

const components = {
  ul: ({ children }) => <ul className="list-disc ml-4">{children}</ul>,
  'dbd-val': Values,
  'dbd-status': Status,
};

const StarRating = ({ perkId }: { perkId: string }) => {
  const [hovered, setHovered] = useState(0);
  const userRating = useSelector((state) => state.userRatings[perkId]);
  const averageRating = ratingApi.endpoints.getRatings.useQueryState(undefined, {
    selectFromResult: ({ data }) => data?.[perkId],
  });
  const [addRating] = useAddRatingMutation();
  const dispatch = useDispatch();
  const maskId = `star-${nanoid()}`;

  const handleClick = (rating) => {
    addRating({ id: perkId, rating });

    let userRatings = JSON.parse(localStorage?.getItem('userRatings'));
    if (typeof userRatings !== 'object' || userRatings === null) userRatings = {};
    userRatings[perkId] = rating;
    localStorage.setItem('userRatings', JSON.stringify(userRatings));

    dispatch(setUserRating({ id: perkId, rating }));
  };

  const handleMouseEnter = (stars) => {
    setHovered(stars);
  };

  const handleMouseLeave = () => {
    setHovered(0);
  };

  const highlightedStars = hovered || userRating || averageRating;

  return (
    <div className={clsx('mt-0.5', { 'text-yellow-400': hovered || userRating })}>
      {[0, 1, 2, 3, 4].map((n) => (
        <svg
          className="h-5 inline-block align-top"
          key={n}
          viewBox="0 0 576 512"
          onClick={(e) => {
            e.stopPropagation();
            handleClick(n + 1);
          }}
          onMouseEnter={() => handleMouseEnter(n + 1)}
          onMouseLeave={handleMouseLeave}
        >
          <mask id={`${maskId}-${n}`}>
            <rect x="0" y="0" width="576" height="512" fill="black" />
            <path
              fill="white"
              d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
            />
          </mask>
          <rect
            x="0"
            y="0"
            width="576"
            height="512"
            fill="gray"
            mask={`url(#${maskId}-${n})`}
            opacity="0.4"
          />
          <rect
            x="0"
            y="0"
            width={Math.max(0, Math.min(576, 576 * (highlightedStars - n)))}
            height="512"
            fill="currentColor"
            mask={`url(#${maskId}-${n})`}
          />
        </svg>
      ))}
      {userRating > 0 && <span className="ml-2">You rated this {userRating} stars!</span>}
    </div>
  );
};

const AverageRating = ({ perkId }: { perkId: string }) => {
  const averageRating = ratingApi.endpoints.getRatings.useQueryState(undefined, {
    selectFromResult: ({ data }) => data?.[perkId],
  });

  return <div className="text-sm text-gray-300">Average Rating: {averageRating}&#9733;</div>;
};

const PerkInfo = ({ perk }: { perk: Perk }): JSX.Element => (
  <div>
    <div className="p-2 border-b border-yellow-400 text-5xl">
      <span className="text-6xl">{perk.name[0]}</span>
      {perk.name.substring(1)}
    </div>
    <div className="p-2 bg-black">
      <div
        className={clsx('capitalize italic font-bold', {
          'text-red-500': perk.type === 'killer',
          'text-blue-500': perk.type === 'survivor',
        })}
      >{`${CHARACTERS[perk.owner] ?? 'General'} ${perk.type} Perk`}</div>
      <div className="pb-1 mb-2 border-b border-gray-700">
        <StarRating perkId={perk.id} />
        <AverageRating perkId={perk.id} />
      </div>
      <div className="space-y-4">
        <ReactMarkdown plugins={[directive, dbdDirectives]} components={components}>
          {perk.description}
        </ReactMarkdown>
      </div>
      {perk.flavor && <div className="mt-4 italic font-light text-yellow-100">{perk.flavor}</div>}
    </div>
  </div>
);

export default PerkInfo;
