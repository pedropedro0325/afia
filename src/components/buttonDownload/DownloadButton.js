import React from 'react'
import { useTranslation } from 'react-i18next'
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
import './css.scss'

const DownloadButton = ({ rootElementId, downloadFileName }) => {

    const downloadFileDocument = () => {
        const input = document.getElementById(rootElementId)
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL("image/png")
            const pdf = new jsPDF("p", "pt", "a3")
            pdf.addImage(imgData, "JPEG", 0, 0)
            pdf.save(`${downloadFileName}`)
        })
    }

    const { t } = useTranslation()

    return (
        <div>
            <div className='download'>
                <button onClick={downloadFileDocument}>
                    <h4>{t('telecharger')} pdf</h4>
                </button>
            </div>
        </div>
    )
}

export default DownloadButton
