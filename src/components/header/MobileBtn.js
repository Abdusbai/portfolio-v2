function MobileBtn({ handleOpen }) {
  return (
    <>
      <button className="btn-mobile" aria-label="mobile navigation button">
        <label className="burger" htmlFor="burger">
          <input type="checkbox" id="burger" onClick={() => handleOpen()} />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </button>
    </>
  );
}

export default MobileBtn;
