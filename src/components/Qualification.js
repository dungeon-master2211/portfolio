import React, { useContext } from 'react'
import { ThemeContext } from '../utils/Theme'

const Qualification = () => {
    const theme = useContext(ThemeContext)
    const data = [{
        name:'Tata Consultancy Services',
        role:'Developer',
        experience:'2021-present'
    },
    {
        name:'DALIMSS Varanasi(Intermediate)',
        role:'83.4%',
        experience:'2016'
    }]
    return (
        <div className={`experience experience-${theme}`}>
            <h2 className='section-title'>Experience</h2>
            <section className={`experience-section experience-section-${theme}`}>
                <div className='lining-section'>
                    {Array(2).fill(0).map((item,index)=>{
                        return <div className='line-wrapper' key={index}>
                        <div className='circle'></div>
                        <div className='line'></div>
                    </div>
                    })}
                    

                </div>
                <div className='experience-description'>
                    {data.map((item,index)=>{
                        return <section className='experience-card' key={index}>
                            <span className='experience-name'>{item.name}</span>
                            <span className='experience-role'>{item.role}</span>
                            <span className='experience-duration'>{item.experience}</span>
                        </section>
                    })}
                </div>
            </section>
        </div>
    )
}

export default Qualification