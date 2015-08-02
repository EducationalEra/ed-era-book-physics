# Важливi приклади

Зараз ми розглянемо два дуже важливi типи завдань на тему рiвномiрного руху по колу та пiдходи до розв’язання такого роду задач.

 <p style="margin-left:1cm;"><span class="p1"><b>1. Швидкiсть рiзних точок на колесi</b></span></p>

На ЗНО дуже часто зустрiчаються завдання на комбiнування двох видiв руху: поступального та обертального. Важливим фактом є те, що якщо точка рухається поступально зi швидкiстю $$\vec{v_п}$$ та обертально з лiнiйною швидкiстю $$\vec{v_о}$$, то результуюча швидкiсть точки:

<div align="center">$\vec{v} = \vec{v_п} + \vec{v_о}$</div>

<div class="space">Розглянемо приклад. Автомобiль рухається рiвномiрно по горизонтальнiй дорозi без проковзування зi швидкiстю $\vec{v}$. Визначити швидкостi вказаних точок.</div>

<div class="space"><img class="image" width="235" height="240" src="https://rawgit.com/chudaol/ed-era-book-physics/master/images/chapter_3/16.png" /></div>

<ul>
<li>
<div class="space">Почнемо з точки крiплення колеса (вiсь обертання). Так як вiсь прикрiплена до автомобiля, то її швидкiсть рухається зi швидкiстю рiвною швидкостi автомобiля.</div>
<div class="centered-table-wrapper">
<table class="centered-table">
<tr class="eq">
<td class="eq">
<p1>$$v_о = v$$</p1>
</td>
</tr>
</table></div>
</li>
<li>
<div class="space">Тепер розглянемо <b>першу точку</b></div>

<div class="space"><img class="image" width="326" height="114" src="https://rawgit.com/chudaol/ed-era-book-physics/master/images/chapter_3/17.png" /></div>


<div class="space">Швидкiсть цiєї точки складається з лiнiйної швидкостi обертання колеса $\vec{v_{об}}$, напрямленої влiво та поступальної швидкостi $\vec{v}$, напрямленої вправо.</div>
<div class="centered-table-wrapper">
<table class="centered-table">
<tr class="eq">
<td class="eq">
<p1>$$\vec{v_1} = \vec{v_{об}} + \vec{v}$$</p1>
</td>
</tr>
</table></div>

<div class="space">З iншої сторони, не дарма в умовi видiлено жирним, що колесо рухається без проковзування. Це означає, що у системi вiдлiку "Земля"ця точка прив’язана до неї, тобто нерухома. Отже, при розглядi модулей швидкостей отримуємо</div>
<div class="centered-table-wrapper">
<table class="centered-table">
<tr class="eq">
<td class="eq">
<p1>$$v_1 = 0 \Rightarrow \vec{v_{об}} = \vec{v}$$</p1>
</td>
</tr>
</table></div>

<div class="space"><font color="red">$${\Large!}$$</font>  <b>Важливо пам’ятати,</b> що якщо точка доторкається до якоїсь поверхнi i при цьому сказано, що вона рухається без проковзування, то швидксiть цiєї точки дорiвнює швидкостi цiєї поверхнi.</div>
</li>
<li>
<div class="space"><b>Друга точка.</b></div>

<div class="space"><img class="image" width="374" height="132" src="https://rawgit.com/chudaol/ed-era-book-physics/master/images/chapter_3/18.png" /></div>


<div class="space">Швидкостi обертального та поступального руху напрямленi вправо. Також ми тепер знаємо з попереднього пункту, що швидкiсть обератання дорiвнює швидкостi поступального руху</div>
<div class="centered-table-wrapper">
<table class="centered-table">
<tr class="eq">
<td class="eq">
<p1>$$\vec{v_2} = \vec{v_{об}} + \vec{v} \Rightarrow v_2 = 2v$$</p1>
</td>
</tr>
</table></div>
</li>
<li>
<div class="space"><b>Третя точка.</b></div>

<div class="space"><img class="image" width="196" height="286" src="https://rawgit.com/chudaol/ed-era-book-physics/master/images/chapter_3/19.png" /></div>


<div class="space">Швидкiсть обертального руху напрямлена вертикально вгору. швидкiсть поступального руху, як завжди, вправо. Векторну суму можна здiйснити за правилом паралелограма. Модуль результуючого вектора можна знайти за допомогою теореми Пiфагора.</div>
<div class="centered-table-wrapper">
<table class="centered-table">
<tr class="eq">
<td class="eq">
<p1>$$v_3 = \sqrt{v^2 + v^2} = v \sqrt{2}$$</p1>
</td>
</tr>
</table></div>
</li>
<li>
<div class="space"><b>Четверта точка.</b></div>

<div class="space"><img class="image" width="200" height="145" src="https://rawgit.com/chudaol/ed-era-book-physics/master/images/chapter_3/20.png" /></div>


<div class="space">Швидкiсть обертального руху напрямлена по дотичнiй до поверхнi колеса. Швидкiсть поступального руху – вправо. Iз геометрiї кут мiж векторами 45º. За допомогою теореми косинусiв:</div>
<div class="centered-table-wrapper">
<table class="centered-table">
<tr class="eq">
<td class="eq">
<p1>$$v_4 = \sqrt{v^2 + v^2 - 2 v · v · \cos (135°)} \approx 1.85v$$</p1>
</td>
</tr>
</table></div>
</li>
<li>
<div class="space"><b>Будь-яка точка.</b> Результуюча швидкiсть будь-якої точки – це векторна сума швидкостi обертання та поступальної швидкостi. Головне спочатку розiбратися з тим, куди i яка з цих швидкостей напрямлена.</div>
</li>
</ul>

<p style="margin-left:1cm;"><span class="p1"><b>2. Шкiви та шестернi рiзних радiусiв</b></span></p>
<div class="space">Ще один тип вiдомих задач стосується з’єднаних механiзмiв, що обертаються. Цi механiзми мають рiзнi радiуси (або у випадку шестерней – рiзну кiлькiсть зубцiв) та, вiдповдно, рiзнi перiоди обертання.</div>

<div class="space"><img class="image" width="320" height="247" src="https://rawgit.com/chudaol/ed-era-book-physics/master/images/chapter_3/21.png" /></div>

<div class="space"><font color="red">$${\Large!}$$</font>  Потрiбно розумiти всього двi речi для вирiшення таких задач:</div>
<ul>
<li>
<div class="space">Точки, що обертаються на рiзних тiлах (рiзних радiусiв, наприклад) та поєднанi мiж собою або за допомогою дроту (як на цьому рисунку), або при безпосередньому контактi без проковзування, мають <b>однакову швидкiсть.</b></div>
<div align="center" class="space">$$v_2 = v_3 \Rightarrow \dfrac{R_2}{T_2} = \dfrac{R_3}{T_3}$$ або $$R_2 \nu_2 = R_3 \nu_3$$</div>
</li>
<li>
<div class="space">Частини (наприклад, рiзного радiуса) одного i того самого тiла мають <b>однаковi кутовi швидкостi,</b> адже кут повороту за промiжок часу однаковий для всiх точок на тiлi.</div>
<div align="center" class="space">$\omega_3 = \omega_4 \Rightarrow T_3 = T_4$</div>
<div align="center">$$\omega_1 = \omega_2 \Rightarrow T_1 = T_2$$</div>
</li>
</ul>
