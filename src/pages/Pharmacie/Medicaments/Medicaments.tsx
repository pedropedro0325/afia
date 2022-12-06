import React, { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './medicament.scss'

const Medicaments = () => {

    const [medicament, setMedicament] = useState([
        { id: 1, nomMedoc: "Paracétamol", categorie: "Tablette", dateAchat: "25-11-2022", prix: "6$", dateExp: "12-12-2023", stock: "122" },
        { id: 2, nomMedoc: "Amoxicilline", categorie: "Injectable", dateAchat: "22-11-2022", prix: "20$", dateExp: "03-04-2023", stock: "135" },
        { id: 3, nomMedoc: "Vitamine C", categorie: "Sirop", dateAchat: "15-11-2022", prix: "5$", dateExp: "12-11-2023", stock: "200" },
        { id: 4, nomMedoc: "Doliprane", categorie: "Tablette", dateAchat: "03-11-2022", prix: "8$", dateExp: "22-11-2023", stock: "189" }
    ])

    const [search, setSearch] = useState('')

    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='facturation-container'>
                    <h2>La liste des médicaments</h2>
                    <br />
                    <div className='top'>
                        <div className='nav'>
                            <h4>Médicaments</h4>
                            <div className='search'>
                                <input type="search" placeholder='Recherche'
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>
                            {/* <Link to={`/ajouter-un-evenement`}>
                                <button className='btn-blue'>
                                    <FontAwesomeIcon icon={faPlus} className="i-plus" />
                                </button>
                            </Link> */}
                        </div>
                    </div>
                    <div className='table-patient'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Nom du médicament</th>
                                    <th>Catégorie</th>
                                    <th>Date d'achat</th>
                                    <th>Prix</th>
                                    <th>Date d'expiration</th>
                                    <th>Stock</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    medicament.filter((el: any) => {
                                        return search.toLocaleLowerCase() === '' ? el : el.nomMedoc.toLowerCase().includes(search)
                                    }).map((el: any) => (
                                        <tr key={el.id}>
                                            <td>{el.nomMedoc}</td>
                                            <td>{el.categorie}</td>
                                            <td>{el.dateAchat}</td>
                                            <td>{el.prix}</td>
                                            <td>{el.dateExp}</td>
                                            <td>{el.stock}</td>
                                            <td><button className='btn-blue'><FontAwesomeIcon icon={faTrash} className="i-plus" /></button></td>
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

export default Medicaments
