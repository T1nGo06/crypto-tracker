import { Tooltip } from 'react-tooltip';

const MarketCapTooltip = () => {
  return (
    <div>
      <button data-tooltip-id="market-cap-tooltip">Hover me</button>
      <Tooltip id="market-cap-tooltip" place="top" content="Market Capitalization Tooltip" />
    </div>
  );
};

export default MarketCapTooltip;
