import classNames from 'classnames'
import './styles/fonts.css'
import './App.css'
import img from './images/img.png'
import profile from './images/profile.jpeg'

function App() {

    return (
        <div className={'border'}>
            <img
                alt={'img'}
                src={img}
            />

            <div className={'texts'}>
                <div
                    className={classNames('text-preset-3', 'learning')}
                >
                    Learning
                </div>

                <div
                    className={'text-preset-3'}
                    style={{ color: 'var(--gray-950)' }}
                >
                    Published 21 Dec 2023
                </div>

                <div
                    className={classNames('text-preset-1', 'link')}
                    style={{ color: 'var(--gray-950)', textAlign: 'left' }}
                >
                    HTML & CSS foundations
                </div>

                <div
                    className={'text-preset-2'}
                    style={{ color: 'var(--gray-500)', textAlign: 'left' }}
                >
                    These languages are the backbone of every website, defining structure, content, and presentation.
                </div>
            </div>

            <div className={'profileBlock'}>
                <img
                    alt={'profile'}
                    src={profile}
                />

                <div
                    className={'text-preset-3'}
                    style={{ fontWeight: '800' }}
                >
                    Greg Hooper
                </div>
            </div>
        </div>
    )
}

export default App
