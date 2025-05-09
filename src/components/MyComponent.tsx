import type {FC} from "react";
import './MyComponent.css';
import styles from './MyComponent.module.css';

type MyComponentProps = {
    text:string;
}

const MyComponent:FC<MyComponentProps> = ({text}) => {
    return (
        <div className={'target'}>
            <h1 className={styles.text}>{text}</h1>
        </div>
    );
};

export default MyComponent;
