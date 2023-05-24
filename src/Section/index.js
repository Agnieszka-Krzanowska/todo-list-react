import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
    <section>
        <div className="section__header">
            <h2 className="h2">{title} </h2>
            {extraHeaderContent}
        </div>
        {body}
    </section>
);

export default Section;