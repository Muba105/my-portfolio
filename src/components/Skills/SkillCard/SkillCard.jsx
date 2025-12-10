import React from 'react'
import './SkillCard.css'

const SkillCard = ({title,inconUrl,isActive,onclick}) => {
  return (
    <div 
    className={`skills-card ${isActive ? "active" : ""}`}
    onclick={() => onclick()}>

        <div className="skills-icon">
            <img src={iconUrl} alt={title}/>
        </div>
        <span>{title}</span>

    </div>
    
  )
}

export default SkillCard