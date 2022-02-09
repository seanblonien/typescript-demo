const chalk = require('chalk');

type BaseProps = {
  children?: string,
  className?: string;
};

type Component<T extends object> = (props: BaseProps & T) => string;

type MyComponentProps = {
  color: 'red' | 'blue' | 'green';
}

const MyComponent: Component<MyComponentProps> = ({color, className = ''}) => {
  return `<div class=${className} style="color: ${chalk[color](color)}"></div>`;
};

console.log(MyComponent({color: 'green'}));
