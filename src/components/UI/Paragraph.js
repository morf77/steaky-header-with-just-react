import classes from './Paragraph.module.css'

function Paragraph (props) {
    return (
        <p className={classes.paragraph}>{props.children}</p>
    )
}

export default Paragraph ;