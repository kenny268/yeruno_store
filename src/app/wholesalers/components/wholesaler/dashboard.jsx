"use client"
import styles from './WaterEffect.module.css';
const Dashboard = ()=>{
    const handleRipple = (e) => {
        console.log('Mouse Move Event Triggered');
        const ripple = document.createElement('span');
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.classList.add(styles.ripple);
        console.log('Ripple Element Created:', ripple);
        e.target.appendChild(ripple);
        setTimeout(() => {
          ripple.remove();
        }, 500);
      };
    return(
        <div className={styles['water-effect']} onMouseMove={handleRipple}>
        Hover over me
      </div>
    )
}
export default Dashboard