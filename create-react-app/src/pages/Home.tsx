import styles from './style/Home.module.scss';

const Home = () => {
  return (
    <div className={styles['home-container']}>
      <h1>React - Custom reuse components & Hooks & helpers</h1>
      <div>
        <h2>Custom reuse components</h2>
        <ol>
          <li>
            <h3>Table ✔️</h3>
          </li>
          <li>
            <h3>Checkbox</h3>
          </li>
          <li>
            <h3>Dropdown</h3>
          </li>
          <li>
            <h3>Label</h3>
          </li>
          <li>
            <h3>Input</h3>
          </li>
          <li>
            <h3>Toggle</h3>
          </li>
          <li>
            <h3>Tab</h3>
          </li>
          <li>
            <h3>Modal</h3>
          </li>
        </ol>
      </div>
      <div>
        <h2>Custom Hooks</h2>
        <ol>
          <li>
            <h3>useClickOutside</h3>
          </li>
          <li>
            <h3>useInput</h3>
          </li>
          <li>
            <h3>useTitle</h3>
          </li>
        </ol>
      </div>
      <div>
        <h2>Custom helpers</h2>
        <ol>
          <li>
            <h3>type</h3>
          </li>
          <li>
            <h3>sort</h3>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
