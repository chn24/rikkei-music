import React, {useEffect} from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { officeState } from '../../../store/idParam';
import {  useRecoilState } from 'recoil'

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

    const [searchParams, setSearchParams] = useSearchParams()
    const {officeId} = useParams()
    const [idParam,setIdParam] = useRecoilState(officeState)
    const navigate = useNavigate()

    const handleChangePlace = (e: React.MouseEvent, id : number) => {
      e.preventDefault()
      navigate(`/${id}`)
      setIdParam(id)
    }

    return (
        <div className="header">
          <div className="header-container container">
            <div className="header-logo"></div>
            <div className="header-offices">
              {officeList.map((office) => {
                return (
                  <a href="#" className={`header-offices-link ${idParam === office.id ? 'active' : null}`} defaultValue={office.id} key={office.id} onClick={(e, id = office.id) => handleChangePlace(e, id)}>
                    {office.name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      );
  }

  export default Header