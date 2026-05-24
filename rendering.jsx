import {createRoot} from 'react-dom/client'
import { players } from './constants';

function createTable() {
    let root = createRoot(document.getElementById('bodies'));
    for (let i = 0; i < players.length; i++) {
        root.render((<td>{players[i]}</td>));
    }
}