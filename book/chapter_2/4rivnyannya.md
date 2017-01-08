# Рівняння рівноприскореного прямолінійного руху

Розглядаючи рівномірний прямолінійний рух, ми з вами встановили, що площа фігури, обмеженої графіком $$\upsilon_x(t)$$, віссю часу та лініями $$t=t_1$$ і $$t=t_2$$, дорівнює проекції переміщення, яке здійcнило тіло за цей проміжок часу.

Погляньмо на площу потрібної фігури на графіку $$\upsilon_x(t)$$ для рівноприскореного прямолінійного руху.

<img class="image"  src="https://rawgit.com/chudaol/ed-era-book-physics/master/images/chapter_2/6.svg" />

<span class="p1">Проекція переміщення:</span> $$S_x = S_{\text{трикутника}} + S_{\text{прямокутника}}$$

$$S_{\text{трикутника}} = \dfrac{h\cdot a}{2}$$ $$= \dfrac{(\upsilon_x-\upsilon_{0x})(t_2-t_1)}{2}$$  $$=\dfrac{(\upsilon_x-\upsilon_{0x})\Delta t}{2}$$ $$= \dfrac{(\upsilon_x-\upsilon_{0x})\Delta t\cdot\Delta t}{2\Delta t}$$ $$=\dfrac{a\Delta t^2}{2}$$

$$S_{\text{прямокутника}} = (\upsilon_x-\upsilon_{0x})(t_2-t_1)$$ $$=\upsilon_{0x}(t_2-t_1) $$$$= \upsilon_{0x}\Delta t \Rightarrow $$$$ \boxed{S_x=\upsilon_{0x}\Delta t + \dfrac{a \Delta t^2}{2}}$$

Проекція переміщення дорівнює різниці між координатами початку руху і кінця руху $$\rightarrow S_x=x - x_0$$, підставляючи цей вираз у вираз для переміщення, отримуємо рівняння рівноприскореного прямолінійного руху.

<div class="eoz-wrap">
<span class="eoz">Визначення</span>
<div class="eoz-text">
<b>Проекція переміщення на вісь $$x:$$</b> 

\[S_x = \upsilon_{0x}t +\dfrac{at^2}{2}\]
    
<b>Проекція швидкості на вісь $$x:$$</b>


\[\upsilon_x=\upsilon_{0x}+at\]


<b>Рівняння рівноприскореного прямолінійного руху:</b>


\[x(t)=x_0+\upsilon_{0x}t+\dfrac{at^2}{2}\]

$$x(t)$$ – координата тіла у момент часу $$t$$;
<br>
$$x_0$$ – початкова координата тіла;
<br>
$$\upsilon_{0x}$$ – проекція початкової швидкості на вісь $$x$$;
<br>
$$a_x$$ – проекція прискорення на вісь $$x$$.
</div>
</div>


Як видно, залежність $$x(t)$$ – квадратична, тобто присутній член $$t^2$$. Вид цієї функції – параболічний (iз видами функцій ви можете детально ознайомитись в курсі з математики).

<div class="space">
<div class="task-wrap">
<span class="task">Задача 2</span> <b>ГАЛЬМУВАННЯ АВТОМОБІЛЯ</b>
<div class="task-text">
<p>Міністерство транспорту у м. Київ вирішило провести дослідження, як саме величина гальмівного шляху в залежить від швидкості автомобіля. Так як різні машини гальмують по-різному, було вирішено знайти відношення величин гальмівного шляху для двох різних початкових швидкостей $$\upsilon'_{0x}$$ та<br>$$\upsilon''_{0x}$$, тобто $$\dfrac{l''}{l'}$$. Вважайте, що прискорення, з яким автомобіль рухається під час гальмування, однакове в обох випадках.</p>
<p></p>
<p><b>Дано:</b> $$\upsilon'_{0x}, \ \upsilon''_{0x}, \ a'_x=a''_x$$</p>
<p></p>
<p><b>Знайти:</b>  $$\dfrac{l''}{l'}$$</p>
<p>
<ul class="nav-tab" id="mytab">
<button class="btn" data-target="#plot" data-toggle="pill">Схема</button>
<button class="btn" data-target="#decision" data-toggle="pill">Розв’язання</button>
<button class="btn" data-target="#answer" data-toggle="pill">Вiдповiдь</button>
<button class="btn" data-target="#hide" data-toggle="pill">Приховати</button>
</ul>
<div id="mytab" class="tab-content">
  <div class="tab-pane" id="plot">
<p>Спрямуймо вісь $$x$$ у бік руху, тоді $$\upsilon_{0x}>0, \ a_x <  0$$.</p>
<p><img class="image"  src="https://rawgit.com/chudaol/ed-era-book-physics/master/images/chapter_2/7.svg" /></p>
  </div>
  <div class="tab-pane" id="decision">
<p><b><i>Розв’язання.</i> </b> </p>
<p>Спрямуймо вісь $$x$$ у бік руху, тоді $$\upsilon_{0x}>0, \ a_x <  0$$.</p>

<p><img class="image"  src="https://rawgit.com/chudaol/ed-era-book-physics/master/images/chapter_2/7.svg" /></p>

<p>Нехай модуль прискорення дорівнює $$a$$. Тоді $$a'_x=a''_x=-a$$. Помістимо початок координат у точку, з якої починаємо досліджувати гальмування $$x_0=0$$. Рівняння руху для обох випадків:</p>

<p>\[l'=x'=\upsilon'_{0x}t-\dfrac{at^2}{2}, \  l''=x''=\upsilon''_{0x}t-\dfrac{at^2}{2}\]</p>

<p>Щоб знайти час зупинки автомобіля, треба розв’язати рівняння швидкості (зупинка $$\rightarrow \upsilon_x=0$$):</p>

<p>\[\upsilon_x=\upsilon_{0x}-at \Rightarrow 0=\upsilon_{0x}-at\Rightarrow t=\dfrac{\upsilon_{0x}}{a}\]</p>

<p>Підставимо час у рівняння залежності координати від часу: </p>

<p>\[x=\upsilon_{0x}\cdot\dfrac{\upsilon_{0x}}{a}-\dfrac{a\cdot\upsilon^2_{0x}}{2a^2}=\dfrac{\upsilon^2_{0x}}{a}-\dfrac{\upsilon^2_{0x}}{2a}=\dfrac{\upsilon^2_{0x}}{2a}\]</p>

<p>Отже, відношення гальмівних шляхів дорівнює відношенню квадратів швидкостей:</p>

<p>\[\dfrac{x''}{x'}=\dfrac{\upsilon''^2_{0x}}{\upsilon'^2_{0x}}\]</p>

<p>Наприклад, гальмівний шлях для швидкості $$80$$ км/год приблизно в $$1.7$$ разів більший ніж для $$60$$ км/год.</p>
  </div>
  <div class="tab-pane" id="answer"><p><b>Вiдповiдь.</b></p>
<p>Bідношення гальмівних шляхів дорівнює відношенню квадратів швидкостей:</p>

<p>\[\dfrac{l''}{l'}=\dfrac{x''}{x'}=\dfrac{\upsilon''^2_{0x}}{\upsilon'^2_{0x}}\]</p>

<p>Наприклад, гальмівний шлях для швидкості $$80$$ км/год приблизно в $$1.7$$ разів більший ніж для $$60$$ км/год.</p>
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
<p>Рух тіла описує рівняння $$x = 4 - 3t + 2t^2$$, де всі величини виражено в одиницях SI. Визначте проекцію швидкості тіла на вісь $$Ox$$ через 2 с після початку руху.</p>
<answer> -6 м/с</answer>
<answer correct> 5 м/с</answer>
<answer> 6 м/с</answer>
<answer> 8 м/с</answer>
<explanation>
<p>Порівняймо рівняння з умови з рівнянням одновимірного руху $$x = x_0 + \upsilon_{0}t + \dfrac{at^2}{2}$$.<br>Отже, маємо $$\upsilon_0 = -3 \thinspace \text{м/с}, \, a = 4 \thinspace  \text{м/с}^2$$, а формула для швидкості  $$\upsilon = \upsilon_0 + at$$ матиме вигляд $$\upsilon = -3 + 4t$$ .<br>Підставивши час 2 с знайдемо правильну відповідь $$\upsilon = 5 \thinspace \text{м/с}$$.</p>

</explanation>
</question>
</quiz>