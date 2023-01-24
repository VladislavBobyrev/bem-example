import { doc } from "prettier";
import "simplebar"; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import "simplebar/dist/simplebar.css";

const select = document.querySelector(".choices__list .choices__list");
select.dataset.simplebar = true;
