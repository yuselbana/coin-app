import styles from './AboutComponent.module.css'

const AboutComponent = (props) => {
    return (
        <div className={styles.about_comp_container}>
                <section className={styles.title_icon}>
                {props.icon}
                <h3>{props.title}</h3>
                
                </section>
                <p>{props.content}</p>
        </div>
    )
}
export default AboutComponent;