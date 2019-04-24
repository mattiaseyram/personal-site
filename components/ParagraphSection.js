
import ReactMarkdown from 'react-markdown'

const Section = (props) => {

    const { body } = props;

    return (
        <div className="item">
            <ReactMarkdown source={body}/>
        </div>
    )
}

export default Section