import axios from 'axios';
import * as Popper from '@popperjs/core';
import $ from 'jquery'
window.Popper = Popper;
import 'bootstrap';

window.axios = axios;
window.$ = $;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;
