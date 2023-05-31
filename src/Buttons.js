function Buttons({filteredBooks}) {

    return<div className="cont">
        <button className="change" onClick={() => filteredBooks("роман")}>Роман</button>
        <button className="change" onClick={() => filteredBooks("сказка")}>Сказка</button>
        <button className="change" onClick={() => filteredBooks("повесть")}>Повесть</button>
        <button className="change" onClick={() => filteredBooks("антиутопия")}>Aнтиутопия</button>
        <button className="change" onClick={() => filteredBooks("новелла")}>Hовелла</button>
        <button className="change" onClick={() => filteredBooks("проза")}>Проза</button>
        <button className="change" onClick={() => filteredBooks("поэма")}>Поэма</button>

    </div>



}
export default Buttons;