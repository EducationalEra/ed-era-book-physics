#Основні поняття одновимірної кінематики


<div class="eoz-wrap">
<span class="eoz">Визначення</span>
<div class="eoz-text">
<b>Матерiальна точка (МТ)</b> – це тiло, розмiрами якого в задачi можна знехтувати. Тодi рух всього тiла ми можна представити, як рух однiєї точки. <b>МТ</b> застосовується в кiнематицi i значно спрощує розв’язання задач.
<br>
<p></p>
Наприклад, розгляньмо рух автомобiля мiж двома мiстами, розташованими на відстані 100 км одне від одного. Нам не важливо, яка висота чи довжина автомобiля, щоб розглядати характеристики часу, за який автомобiль проходить цю вiдстань.
</div>
</div>


<img src="https://rawgit.com/chudaol/ed-era-book-physics/master/images/chapter_1/3.svg" class="image"/>


* <span class="p1">Траєкторiя</span> – лiнiя, вздовж якої рухається тiло.
* <span class="p1">Шлях $$(l)$$</span> – довжина траєкторiї.
* <span class="p1">Вектор перемiщення тiла $$(\vec{S_{}})$$</span>  – [вектор](../Add/vector/vector1.md), що сполучає точку початку та кiнця руху. Модуль вектора перемiщення $$(|\vec{S_{}}|)$$ (вiдстань вiд початкової до кiнцевої точки) є також найкоротшим шляхом. <b>Модуль перемiщення тiла по замкнутiй траєкторiї дорiвнює нулеві.</b>

<div class="space">
<div class="task-wrap">
<span class="task">Задача 1</span> <b>ПЕТРО ТА КОМАХА</b>
<div class="task-text">
<p>Усi ми бачили, як дивно рухаються комахи, а вже вiдомий нам з відео Петро присвятив цьому аж 10 секунд свого життя. Ще й замалював траєкторiю руху мурахи $$(A \rightarrow B \rightarrow C \rightarrow D \rightarrow E \rightarrow F)$$. Допоможiть йому визначити шлях (довжину траєкторії) та модуль перемiщення за час спостереження, якщо розмiр клiтинки у сiтцi, яку вiн використовував, становить 1 см x 1 см.</p>
<p>
<ul class="nav-tab" id="mytab">
<button class="btn" data-target="#plot" data-toggle="pill">Схема</button>
<button class="btn" data-target="#decision" data-toggle="pill">Розв’язання</button>
<button class="btn" data-target="#answer" data-toggle="pill">Вiдповiдь</button>
<button class="btn" data-target="#hide" data-toggle="pill">Приховати</button>
</ul>
<div id="mytab" class="tab-content">
  <div class="tab-pane" id="plot">
<p> <img src="https://rawgit.com/chudaol/ed-era-book-physics/master/images/chapter_1/4.svg" class="image"/>  </p>
  </div>
  <div class="tab-pane" id="decision">
<p> <img src="https://rawgit.com/chudaol/ed-era-book-physics/master/images/chapter_1/4.svg" class="image"/>  </p>
<p><b><i>Розв’язання.</i> </b> </p>
<p>Траєкторія складається з відрізків $$AB, BC, CD, DE$$ та $$EF$$. Переміщення – вектор $$\vec{AF}$$. Довжини цих відрізків ми знайдемо за допомогою простих теоретичних міркувань та теореми Пiфагора. Вiдрiзок AB – це гiпотенуза прямокутного трикутника, в якого, як видно з рисунка, один із катетiв дорівнює $$1$$ см, а другий – $$2$$ см. Отже, за теоремою Пiфагора:<p>

<p>\[AB = \sqrt{1^2 + 2^2} = \sqrt{5} = 2.24 \thinspace \text{см}\] 
Аналогiчно для iнших вiдрiзкiв шляху: $$BC = 5.10$$ см, $$CD = 2$$ см, $$DE = 3.16$$ см, $$EF = 4.24$$ см.</p>

<p><b>Отже</b>, повний шлях, який подолала комаха за 10 с спостереження, становитиме:</p>

<p>$$l = AB + BC$$$$ + CD + DE$$$$ + EF =$$$$ 16.74 \thinspace \text{см}$$<br>
За час спостереження мураха перемiстилася з точки $$A$$ в точку $$F$$, вибравши, однак,<br>
не найкоротший шлях:</p>

<p>\[|\vec{S_{ }}| = |\vec{AF}| = \sqrt{2^2 + 1^2} = 2.24 \thinspace \text{см}\]</p>
  </div>
  <div class="tab-pane" id="answer"><p><b>Вiдповiдь.</b></p>
<p> <img src="https://rawgit.com/chudaol/ed-era-book-physics/master/images/chapter_1/4.svg" class="image"/>  </p>
<p>Повний шлях, що подолала комаха за 10 секунд спостереження, складатиме:</p>
<p>$$l = AB + BC$$$$ + CD + DE$$$$ + EF =$$$$ 16.74 \thinspace \text{см}$$<br>
За час спостереження мураха перемiстився з точки $$A$$ в точку $$F$$, вибравши при цьому<br>
не найкоротший шлях:</p>
<p>\[|\vec{S_{ }}| = |\vec{AF}| = \sqrt{2^2 + 1^2} = 2.24 \thinspace \text{см}\]</p>
  </div>
  <div class="tab-pane" id="hide"></div>
</div>
</p>
</div>
</div>
</div>
<div class="space"></div>


<quiz correctLabel="correct!" incorrectLabel="incorrect!" checkLabel="check ansert">
<question>
<p>У якому випадку можна вважати тiло матерiальною точкою?</p>
<answer> Двi шестернi обертаються у механiзмi годинника.</answer>
<answer correct> Автомобiль їде з Києва до Харкова</answer>
<explanation>
Шестерні в годиннику схожі за розмірами з самим годинником, а розміри автомобіля на трасі Київ-Харків є нехтовно малими.
</explanation>
</question>
</quiz>



