import { useLoaderData, useLocation, useNavigate, useNavigation } from "react-router-dom";

const Pagination = () => {
  const {meta} = useLoaderData();
  const {pageCount, page} = meta.pagination;

  const pages = Array.from({length: pageCount}, (_,index) => {
    return index + 1;
  });

  const {search, pathname} = useLocation();
  const navigate = useNavigate();

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set('page',pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };
  const handleNav = (action) => {

    if (action === 'prev' || action === 'next') {

      let target = page;

      if (action === 'prev' && page != 1) {
        target = page - 1;
      }
  
      if (action === 'next' && page != pageCount) {
        target = page + 1;
      }

      handlePageChange(target);

    }

    throw new Error('Invalid Action');
  }
  if (pageCount < 2) return null;

  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button className="btn btn-small sm:btn-md join-item uppercase"
                onClick={() => handleNav('prev')}>
                  prev
        </button>

        {
          pages.map((pg) => {
            return <button key={pg} 
                            onClick={() => handlePageChange(pg)}
                            className={`btn btn-xs sm:btn-md border-none join-item ${pg === page ? 'bg-base-300 border-base-300' : ''}`}>
                            {pg}
                    </button>
          })
        }

        <button className="btn btn-small sm:btn-md join-item uppercase"
                onClick={() => handleNav('next')}>
                  next
        </button>
      </div>
    </div>
  )
}

export default Pagination