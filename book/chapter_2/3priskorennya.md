# Прискорення та гальмування

<div class="eoz-wrap">
<span class="eoz">Визначення</span>
<div class="eoz-text">
<b>Рівноприскорений прямолінійний рух</b> – рух, при якому за будь-які однакові проміжки часу швидкість тіла змінюється на однакові величини.
<p></p>
<b>Прискорення рівноприскореного прямолінійного руху</b> – векторна величина, яка дорівнює відношенню зміни швидкості тіла до проміжку часу, за який ця зміна відбулася:
<br>
<br>

<div align="center">$$\vec{a} = \dfrac{\vec{\upsilon}-\vec{\upsilon}_0}{\Delta t}$$</div><br>


<p><span class="p1">У системі SI</span> – $$\dfrac{\text{м}}{\text{с}^2}$$</p>

</div>
</div>

При рівноприскореному прямолінійному русі:
1. Прискорення постійне – $$\vec{a}=const$$
2. Проекція швидкості – пряма лінія, кут нахилу якої визначає прискорення: 
$$\upsilon_x(t)=\upsilon_{0x}+a_xt$$

<img class="image"  src="https://rawgit.com/chudaol/ed-era-book-physics/master/images/chapter_2/3.svg" />

На малюнку зображено зміну швидкості на $$1$$ м/с кожну наступну секунду. Побудуємо відповідний графік залежності проекції швидкості від часу $$\upsilon_x(t)$$:

<img class="image"  src="https://rawgit.com/chudaol/ed-era-book-physics/master/images/chapter_2/4.svg" />

Початкова швидкість, з якої ми почали розгляд руху $$\upsilon_{0x}= 1$$ м/с $$\rightarrow$$ графік починається з точки $$(0,1)$$. Кут нахилу прямої $$\upsilon_x(t)$$ визначає прискорення (аналогічно до визначення швидкості із графіку $$x(t)$$).

<span class="p1">Чим більше нахил прямої</span> $$\boldsymbol \upsilon_x(t)$$, <b>тим більше прискорення</b> $$\boldsymbol a_x$$<b>.</b>


<div class="add-wrap">
<span class="add">Зв’язок з похідною</span>
<div class="add-text">
Ви вже помітили схожість у визначенні проекції швидкості, як тангенсу кута нахилу прямої $$x(t)$$, з визначенням проекції прискорення, як тангенсу кута нахилу прямої $$\upsilon_x(t)$$. Похідна взагалі вказує на швидкість зміни величини. Проекція швидкості – це швидкість зміни координати, а проекція прискорення – це швидкість зміни проекції швидкості.

У школі розглядається тільки рівноприскорений рух, але якщо б прискорення було змінним, то знадобилося б означення <b>миттєвого прискорення</b>, аналогічно до миттєвої швидкості, і виражалося би воно таким чином:

$$a_x=\lim\limits_{\Delta t\to0}\dfrac{\Delta \upsilon_x}{\Delta t}=\upsilon_x^\prime (t)=x^{\prime \prime}(t)$$

Отже, проекція швидкості – похідна від координати, проекція прискорення – похідна від проекції швидкості. А в курсі математики ви ще познайомитесь з означенням другої похідної, тобто «похідної від похідної» (саме це і зображує $$x^{\prime \prime}(t)$$).
</div>
</div>

<div class="space">
<div class="task-wrap">
<span class="task">Задача 1</span> <b>РОБОТА З ГРАФІКАМИ</b>
<div class="task-text">

<p>
<ul class="nav-tab" id="mytab">
<button class="btn" data-target="#decision" data-toggle="pill">Розв’язок</button>
<button class="btn" data-target="#answer" data-toggle="pill">Вiдповiдь</button>
<button class="btn" data-target="#hide" data-toggle="pill">Приховати</button>
</ul>
<div id="mytab" class="tab-content">
  <div class="tab-pane" id="decision">
<p><img class="image"  src="https://rawgit.com/chudaol/ed-era-book-physics/master/images/chapter_2/5.svg" /></p>
<p><b><i>Розв’язок.</i> </b> </p>
<p> Розглянемо кожну ділянку окремо: </p>
<p></p>
<p><b>Перша</b> ($$t_1 = 0 \thinspace \text{c}, t_2 = 3 \thinspace \text{c}$$).</p>
<p>Проекція прискорення:</p>

<p>\[a_{1x} = -2 \thinspace \dfrac{\text{м}}{\text{c}^2}\]</p>

<p>Тоді рівняння швидкості:</p>

<p>\[\upsilon_{1x}=\upsilon_{0x}+a_{1x}t=2-2t\]</p>

<p>Проекція швидкості через три секунди руху:</p>

<p>\[\upsilon_{1x}(3)=-4 \thinspace \dfrac{\text{м}}{\text{c}}\]</p>

<p><b>Друга</b> ($$t_1 = 3 \thinspace \text{c}, t_2 = 5 \thinspace \text{c}$$).</p>
<p>Проекція прискорення:</p>

<p>\[a_{2x} = 4 \thinspace \text{м/c}^2\]</p>

<p>Тоді рівняння швидкості:</p>

<p>\[\upsilon_{2x}=\upsilon_{1x}+a_{2x}t=-4+4t\]</p>

<p>Проекція швидкості через три секунди руху:</p>

<p>$$\upsilon_{2x}(2)=4 \thinspace \text{м/c}$$</p>

<p><b>Третя</b> ($$t_1 = 5 \thinspace \text{c}, t_2 = 9 \thinspace \text{c}$$).</p>

<p>Проекція прискорення:</p>

<p>\[a_{3x} = 1 \thinspace \text{м/c}^2\]</p>

<p>Тоді рівняння швидкості:</p>

<p>\[\upsilon_{3x}=\upsilon_{2x}+a_{3x}t=4+t\]</p>

<p>Проекція швидкості через чотири секунди руху:</p>

<p>\[\upsilon_{3x}(4)=8 \thinspace \text{м/c}\]</p>
  </div>
  <div class="tab-pane" id="answer"><p><b>Вiдповiдь.</b></p>
<p>Визначимо проекцію швидкості на кожній з ділянок через відповідний час руху: </p>
<p><b>Перша</b> ($$t_1 = 0 \thinspace \text{c}, t_2 = 3 \thinspace \text{c}$$).</p>
<p>\[\upsilon_{1x}(3)=-4 \thinspace \dfrac{\text{м}}{\text{c}}\]</p>
<p><b>Друга</b> ($$t_1 = 3 \thinspace \text{c}, t_2 = 5 \thinspace \text{c}$$).</p>
<p>$$\upsilon_{2x}(2)=4 \thinspace \text{м/c}$$</p>
<p><b>Третя</b> ($$t_1 = 5 \thinspace \text{c}, t_2 = 9 \thinspace \text{c}$$).</p>
<p>\[\upsilon_{3x}(4)=8 \thinspace \text{м/c}\]</p>
<p><img class="image"  src="https://rawgit.com/chudaol/ed-era-book-physics/master/images/chapter_2/5.svg" /></p>
  </div>
  <div class="tab-pane" id="hide"></div>
</div>
</p>
</div>
</div>
</div>
<div class="space"></div>

