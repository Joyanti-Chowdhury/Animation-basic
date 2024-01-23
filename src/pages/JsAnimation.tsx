import './JsAnimation.css';

const JsAnimation = () => {

const name = "Programming Hero";
const nameArr = name.split('')

    return (
        <div className='mainn'>
            <div className='container'>
                  {
                    nameArr.map((item,i) =>
                     <span className='alphabet'
                     style={{ transitionDelay : `${i * 30}ms`}}
                     
                     >{item}</span>)
                  }
            </div>
        </div>
    );
};

export default JsAnimation;