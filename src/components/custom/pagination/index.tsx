import cn from 'classnames';

import Icon from 'components/custom/icon';

import s from './s.module.scss';

/**
 * @param {number} current
 * @param {number} last
 * @param {number} [delta=2]
 */
function pagination(current: number, last: number, delta: number = 2) {
  const left = current - delta;
  const right = current + delta + 1;
  const range: number[] = [];
  const rangeWithDots: (number | null)[] = [];
  let l: number;

  range.push(1);
  for (let i = current - delta; i <= current + delta; i++) {
    if (i >= left && i < right && i < last && i > 1) {
      range.push(i);
    }
  }
  range.push(last);

  range.forEach(i => {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(l + 1);
      } else if (i - l !== 1) {
        rangeWithDots.push(null);
      }
    }
    rangeWithDots.push(i);
    l = i;
  });

  return rangeWithDots;
}

type Props = {
  className?: string;
  total: number;
  current: number;
  pageSize: number;
  changeHandler: (page: number) => void;
};

export const Pagination: React.FC<Props> = ({ className, total, current, pageSize, changeHandler }) => {
  const pages = Math.ceil(total / pageSize);
  const paginationList = pagination(current, pages);

  return (
    <div className={cn(s.pagination, className)}>
      <button
        className={cn(s.page, s.prev)}
        type="button"
        onClick={() => changeHandler(current - 1)}
        disabled={current <= 1}>
        <Icon name="arrow-backward" width={24} height={24} color="inherit" />
      </button>
      {paginationList.map((page, idx) =>
        page ? (
          <button
            key={idx}
            onClick={() => changeHandler(page)}
            className={cn(s.page, {
              [s.active]: page === current,
            })}
            type="button"
            disabled={page === current}>
            {page}
          </button>
        ) : (
          <div className={s.separator}>...</div>
        ),
      )}
      <button
        className={cn(s.page, s.next)}
        type="button"
        onClick={() => changeHandler(current + 1)}
        disabled={current >= pages}>
        <Icon name="arrow-forward" width={24} height={24} color="inherit" />
      </button>
    </div>
  );
};
