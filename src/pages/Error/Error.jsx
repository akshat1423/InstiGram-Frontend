import './Error.css';
import sadFace from '../../assets/face-frown-regular.svg'

export default function Error() {
    return (
        <div className="main">
            <div className="error-img">
                <img src={ sadFace } alt="sad face" id='sadFace' />
            </div>
            <div className="error-msg">
                <h1>Error 404</h1>
                <p>Page Not Found</p>
            </div>
        </div>
    )
}