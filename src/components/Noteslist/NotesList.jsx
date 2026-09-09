
import './NotesList.css';
import topografia1 from '../../assets/note_smart_light.jpg';
import Img1 from '../../assets/logo tanz.jpeg';
import sml2Img from '../../assets/sml2.jpeg';
import smartlightLogo2 from '../../assets/smartlight-logo2.jpg';
import { useNavigate } from 'react-router-dom';

const articlesData = [
    {
        img: topografia1,
        title: 'SmartLight for Pisa',
        desc: 'There are many points to address when it comes to sustainable mobility, this is one of them, which has been neglected for too long, it is time to innovate.',
        date: '29/09/2025'
    },
    {
        img: Img1,
        title: 'Why Tanz?',
        desc: "Tanz, the imaginary company from the Salvation series, embodies values such as innovation, management efficiency, loyalty and fairness, offering a reflection on the ethical implications of its model.",
        date: '28/02/2024'
    },
    {
        img: sml2Img,
        title: 'Update from Smart Light',
        desc: 'Update on the Smart Light project with the latest innovations in optimizing intelligent traffic lights and urban sustainable mobility.',
        date: '16/03/2026'
    },
    {
        img: smartlightLogo2,
        title: 'Smart Light — A Chapter Closes',
        desc: 'Smart Light was a fundamental milestone. Today, the team has decided to pause the project and move toward new challenges. The work is preserved — open to anyone who wants to carry it forward.',
        date: '09/09/2026'
    }
];

// Helper function to convert DD/MM/YYYY to Date object for sorting
const parseDate = (dateStr) => {
    const [day, month, year] = dateStr.split('/');
    return new Date(year, month - 1, day);
};

// Sort articles by date (most recent first)
const articles = [...articlesData].sort((a, b) => parseDate(b.date) - parseDate(a.date));


const NotesList = () => {
    const navigate = useNavigate();
    return (
        <ul className="notes-articles-list">
            {articles.map((article, idx) => (
                <li
                    className="notes-article-item"
                    key={idx}
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                        if (article.title === 'SmartLight for Pisa') {
                            navigate('/note-smartlight1');
                        } else if (article.title === 'Why Tanz?') {
                            navigate('/note-tanz');
                        } else if (article.title === 'Update from Smart Light') {
                            navigate('/note-smartlight2');
                        } else if (article.title === 'Smart Light — A Chapter Closes') {
                            navigate('/note-smartlight3');
                        } else {
                            navigate('/wic');
                        }
                    }}
                >
                    <img
                        src={article.img}
                        alt={article.title}
                        className="notes-article-img"
                        loading="lazy"
                        decoding="async"
                        style={article.title === 'Smart Light \u2014 A Chapter Closes' ? { backgroundColor: '#000', objectFit: 'contain', padding: '24px', boxSizing: 'border-box' } : {}}
                    />
                    <div className="notes-article-content">
                        <span className="notes-article-date">{article.date}</span>
                        <h2 className="notes-article-title">{article.title}</h2>
                        <p className="notes-article-desc">{article.desc}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default NotesList;
