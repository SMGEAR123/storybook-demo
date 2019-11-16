import { Button } from '@storybook/angular/demo';
import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addons';

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ));


 
export default { title: 'My Button' }

export const withText = () => ({
  component: Button,
  props: {
    text: 'Hello Button',
  },
});

export const withEmoji = () => ({
  component: Button,
  props: {
    text: '😀 😎 👍 💯',
  },
});


