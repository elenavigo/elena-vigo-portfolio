// import '../../assets/stylesheets/application.css.scss';
import 'bootstrap';
import AOS from 'aos';
import buttonPressed from './menu_buttons';
import fixMenu from './fix_menu';

AOS.init();

buttonPressed();

fixMenu();
