import React, { useState, useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom'
import './medecin.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useMedecins } from '../../../hooks/medecins/useMedecins'

const Medecin = () => {

    const { error, loading, data } = useMedecins()

    const [medecins, setMedecins] = useState<[]>([])

    useEffect(() => {
        setMedecins(data?.partakers)
    }, [data])

    const [search, setSearch] = useState<string>('')

    if (loading) return <div>...loading</div>
    if (error) return <div>something went wrong</div>
    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='medecin-container'>
                    <h2>La liste des médecins</h2>
                    <br />
                    <div className='top'>
                        <div className='nav'>
                            <h4>Médecin</h4>
                            <div className='search'>
                                <input type="search" placeholder='Recherche'
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>
                            <Link to={`/ajouter-un-personnel`}>
                                <button className='btn-blue'>
                                    <FontAwesomeIcon icon={faPlus} className="i-plus" />
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='table-patient'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Prénom</th>
                                    <th>Nom</th>
                                    <th>email</th>
                                    <th>Adresse</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    medecins?.filter((el: any) => {
                                        return search.toLocaleLowerCase() === '' ? el : el.name.toLowerCase().includes(search)
                                    }).filter((curDate: any) => {
                                        return curDate.partakerType.description === "Doctor"
                                    }).map((medecin: any) => (
                                        <tr key={medecin.id}>
                                            <td>{medecin.name}</td>
                                            <td>{medecin.lastName}</td>
                                            <td>{medecin.email}</td>
                                            <td>{medecin.adressId}</td>
                                            <td><Link to={`/personnel/detail/${medecin.id}`}><button className='btn-blue'>voir</button></Link></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Medecin
