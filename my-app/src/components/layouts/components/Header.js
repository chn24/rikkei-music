const officeList = [
  {
    id: 6,
    name: "Handico",
  },
  {
    id: 1,
    name: "Hà Nội HH3",
  },
  {
    id: 2,
    name: "Hà Nội HH4",
  },
  {
    id: 4,
    name: "Tầng 15",
  },
  {
    id: 3,
    name: "Đà Nẵng",
  },

  {
    id: 5,
    name: "Hồ Chí Minh",
  },
];

const Header = () => {
  return (
    <div className="header">
      <div className="header-container container">
        <div className="header-logo"></div>
        <div className="header-offices">
          {officeList.map((office) => {
            return (
              <a href="#" className="header-offices-link" key={office.id}>
                {office.name}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
