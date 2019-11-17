import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { ComponentAComponent } from '../app/components/component-a/component-a.component';
import * as markdown from './notes/a.notes.md';


storiesOf('Component A', module)
    .add('Chris', () => ({
        component: ComponentAComponent,
        props: {
            name: 'Chris',
            myEvent: action('Hello Chris!')
        }
    }), { notes: {markdown} })
    .add('Jane', () => ({
        component: ComponentAComponent,
        props: {
          name: 'Jane',
          myEvent: action('Hello Jane!')
        },
      }), { notes: {markdown} })
      .add('Joe', () => ({
        component: ComponentAComponent,
        props: {
          name: 'Joe',
          myEvent: action('Hello Joe!')
        },
      }), { notes: {markdown} });

