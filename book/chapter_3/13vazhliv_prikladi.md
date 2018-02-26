# Важливi приклади

Зараз ми розглянемо два дуже важливi типи завдань з теми рiвномiрного руху по колу та пiдходи до розв’язання таких задач.

<p class="p3"><span class="p1"><b>1. Швидкiсть рiзних точок на колесi</b></span></p>

На ЗНО дуже часто трапляються завдання на комбiнування двох видiв руху: поступального та обертального. Важливий факт: якщо точка рухається поступально зi швидкiстю $$\vec{\upsilon_п}$$ та обертально з лiнiйною швидкiстю $$\vec{\upsilon_о}$$, то результуюча швидкiсть точки:

<div class="space" align="center">$$\vec{\upsilon_{ }} = \vec{\upsilon_п} + \vec{\upsilon_о}$$</div>

<div class="space"><b>Розгляньмо приклад.</b> Автомобiль рухається рiвномiрно по горизонтальнiй дорозi <b>без проковзування</b> зi швидкiстю $$\vec{\upsilon}$$. Визначити швидкостi вказаних точок.</div>

<div class="space"><img class="image" width="250" src="/images/chapter_3/16.png" /></div>

<ul>
<li>
<div class="space">Почнімо з <b>точки крiплення колеса</b> (вiсь обертання). Оскільки вiсь прикрiплена до автомобiля, то її швидкiсть дорівнює швидкостi автомобiля.</div>
<div class="space"><div class="centered-table-wrapper">
<table class="centered-table">
<tr class="eq">
<td class="eq">
<p1>$$\upsilon_о = \upsilon$$</p1>
</td>
</tr>
</table></div></div>
</li>
<li>
<div class="space">Тепер розгляньмо <b>першу точку</b></div>

<div class="space"><img class="image" width="325" src="/images/chapter_3/17.png" /></div>


<div class="space">Швидкiсть цiєї точки складається з лiнiйної швидкостi обертання колеса $$\vec{\upsilon_{о}}$$, спрямованої ліворуч та поступальної швидкостi $$\vec{\upsilon}$$, спрямованої праворуч:</div>
<div class="space"><div class="centered-table-wrapper">
<table class="centered-table">
<tr class="eq">
<td class="eq">
<p1>$$\vec{\upsilon_1} = \vec{\upsilon_{о}} + \vec{\upsilon_{ }}$$</p1>
</td>
</tr>
</table></div></div>

<div class="space">З iншого боку, не дарма те, що колесо рухається без проковзування, в умовi виокремлено жирним. Це означає, що в системi вiдлiку «Земля» ця точка прив’язана до неї, тобто нерухома. Отже, розглядаючи модулі швидкостей одержуємо:</div>
<div class="space"><div class="centered-table-wrapper">
<table class="centered-table">
<tr class="eq">
<td class="eq">
<p1>$$\upsilon_1 = 0 \Rightarrow \vec{\upsilon_{о}} = \vec{\upsilon_{ }}$$</p1>
</td>
</tr>
</table></div></div>

<font color="red">$${\Large!}$$</font>  <b>Важливо пам’ятати:</b> що якщо точка дотикається до якоїсь поверхнi i при цьому сказано, що вона рухається без проковзування, то швидкiсть цiєї точки дорiвнює швидкостi цiєї поверхнi.
</li>
<li>
<b>Друга точка.</b>

<div class="space"><img class="image" width="375" src="https://rawgit.com/chudaol/ed-era-book-physics/master/images/chapter_3/18.png" /></div>


<div class="space">Швидкостi обертального та поступального руху спрямовані вправо. Також з попереднього пункту ми знаємо, що швидкiсть обертання дорiвнює швидкостi поступального руху:</div>
<div class="space"><div class="centered-table-wrapper">
<table class="centered-table">
<tr class="eq">
<td class="eq">
<p1>$$\vec{\upsilon_2} = \vec{\upsilon_{о}} + \vec{\upsilon_{ }} \Rightarrow \upsilon_2 = 2\upsilon$$</p1>
</td>
</tr>
</table></div></div>
</li>
<li>
<div class="space"><b>Третя точка.</b></div>

<div class="space"><img class="image" width="220"  src="/images/chapter_3/19.png" /></div>


<div class="space">Швидкiсть обертального руху спрямована вертикально вгору. Швидкiсть поступального руху, як завжди, – праворуч. Векторну суму можна знайти? за правилом паралелограма. Модуль кінцевого/остаточного вектора можна знайти за допомогою теореми Пiфагора:</div>

<div class="space"><div class="centered-table-wrapper">
<table class="centered-table">
<tr class="eq">
<td class="eq">
<p1>$$\upsilon_3 = \sqrt{\upsilon^2 + \upsilon^2} = \upsilon \sqrt{2}$$</p1>
</td>
</tr>
</table></div></div>
</li>
<li>
<div class="space"><b>Четверта точка.</b></div>

<div class="space"><img class="image" width="220" src="/images/chapter_3/20.png" /></div>


<div class="space">Швидкiсть обертального руху спрямована по дотичнiй до поверхнi колеса. Швидкiсть поступального руху – вправо. Iз геометрiї кут мiж векторами $$= 45^\circ$$. За допомогою теореми косинусiв:</div>
<div class="space"><div class="centered-table-wrapper">
<table class="centered-table">
<tr class="eq">
<td class="eq">
<p1>$$\upsilon_4 = \sqrt{\upsilon^2 + \upsilon^2 - 2 \upsilon \cdot \upsilon \cdot \cos (135^\circ)} \approx 1.85v$$</p1>
</td>
</tr>
</table></div></div>
</li>
<li>
<b>Будь-яка точка.</b> Результуюча швидкiсть будь-якої точки – це векторна сума швидкостi обертання та поступальної швидкостi. Головне спочатку визначит, куди i яка з цих швидкостей спрямована.
</li>
</ul>

<p class="p3"><span class="p1"><b>2. Шкiви та шестернi рiзних радiусiв</b></span></p>
<div class="space">Ще один поширений тип задач стосується з’єднаних механiзмiв, що обертаються. Цi механiзми мають рiзнi радiуси (або у випадку шестерень – рiзну кiлькiсть зубцiв) та, вiдповдно, рiзнi перiоди обертання.</div>

<div class="space"><img class="image" width="320"  src="/images/chapter_3/21.png" /></div>

<b><font color="red">$${\Large!}$$</font>  Потрiбно розумiти тільки двi речi для вирiшення таких задач:</b>
<ul>
<li>
<div class="space">Точки, що обертаються на рiзних тiлах (рiзних радiусiв, наприклад) та поєднанi мiж собою за допомогою дроту (як на цьому рисунку), або перебувають у безпосередньому без проковзування, мають <b>однакову швидкiсть.</b></div>
<div align="center" class="space">$$\upsilon_2 = \upsilon_3 \Rightarrow \dfrac{R_2}{T_2} = \dfrac{R_3}{T_3}$$ <b>або</b> $$R_2 \nu_2 = R_3 \nu_3$$</div>
</li>
<li>
Частини (наприклад, рiзного радiуса) одного i того самого тiла мають <b>однаковi кутовi швидкостi,</b> адже кут повороту за промiжок часу однаковий для всiх точок на тiлi.
<div align="center">$$\omega_3 = \omega_4 \Rightarrow T_3 = T_4$$</div>
<div align="center">$$\omega_1 = \omega_2 \Rightarrow T_1 = T_2$$</div>
</li>
</ul>
