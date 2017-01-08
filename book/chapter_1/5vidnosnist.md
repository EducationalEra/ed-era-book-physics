#Вiдноснiсть швидкостей та перемiщень

Як вже зазначалося, рух та все, що з ним пов’язане – поняття вiдносне. Саме тому було введено поняття «<b>система вiдлiку</b>» та «<b>тiло вiдлiку</b>». Для того, щоб легко зрозуміти перехід від однієї системи відліку до іншої, розглянемо такий приклад. Микола рухається у рухомiй системi вiдлiку – в потязi зi швидкiстю та перемiщенням <b><span class="p1">Миколи/потяга</span></b>. Потяг (рухома система вiдлiку) має швидкiсть i перемiщення вiдносно нерухомої системи вiдлiку – землi з позначеннями <span class="p1">потяга/землi</span>. Тодi встановити рух Миколи вiдносно землi можна за допомогою суми цих двох векторiв.


<img src="https://rawgit.com/chudaol/ed-era-book-physics/master/images/chapter_1/9.png" class="image"/>


Для подiбних задач рекомендуємо вам використовувати такий вид позначень, як зображено вище. Тоді ви не заплутаєтесь, розв’язуючи такі задачі.

<div class="space">
<div class="task-wrap">
<span class="task">Задача 3</span> <b>ПЕТРО ТА РIКА ДЕСНА</b>
<div class="task-text">
<p>Одного разу Петро вирiшив перепливти Десну. Вiн поплив перпендикулярно до течiї рiки та берегової лiнiї. Петро хотiв потрапити в ту точку, на яку взяв курс, але, нажаль, його ззнесла течія. На яку вiдстань вiд бажаної точки знесло Петра та який шлях вiн подолав? Ширина рiчки – $$50$$ м. Швидкiсть течiї рiчки – $$3$$ км/год. Зазвичай Петро плаває у басейнi зi швидкiстю $$4$$ км/год.</p>
<p><b>Дано:</b> $$\upsilon_{п/р} = 4 \thinspace \text{км/год}, \ \upsilon_{п/з} = 3 \thinspace \text{км/год}, \ l = 50 \thinspace \text{м} = 0.05 \thinspace \text{км}$$</p>
<p><b>Знайти:</b> $$ d, \ L$$</p>
<p>
<ul class="nav-tab" id="mytab">
<button class="btn" data-target="#plot" data-toggle="pill">Схема</button>
<button class="btn" data-target="#decision" data-toggle="pill">Розв’язок</button>
<button class="btn" data-target="#answer" data-toggle="pill">Вiдповiдь</button>
<button class="btn" data-target="#hide" data-toggle="pill">Приховати</button>
</ul>
<div id="mytab" class="tab-content">
  <div class="tab-pane" id="plot">
<p><img src="https://rawgit.com/chudaol/ed-era-book-physics/master/images/chapter_1/10.svg" class="image"/></p>
  </div>
  <div class="tab-pane" id="decision">
<p><img src="https://rawgit.com/chudaol/ed-era-book-physics/master/images/chapter_1/10.svg" class="image"/></p>
<p><b><i>Розв’язок.</i> </b> </p>
<p>Для початку знайдемо, скiльки часу витратив Петро.
\[t=\dfrac{|\thinspace \vec{S_{}}_{п/р} \thinspace|}{|\thinspace \vec{\upsilon}_{п/р} \thinspace|} = \dfrac{l}{\upsilon_{п/з}} = 0.05/4 = 0.0125 \thinspace (\text{год}) \]</p>

<p><i>Зауважмо, що незалежно вiд швидкостi течiї, час, який витратив би Петро не змiнився. Це вiдбувається тому, що швидкiсть течiї в цьому випадку ніяк не впливає на швидкiсть з якою пливе Петро у перпендикулярному до течії напрямку. Змiнюється шлях, напрямок руху тiла та його швидкiсть, але не величина перпендикулярної компоненти.</i> </p>

<p>Вiдстань, на яку знесло Петра: </p>
<p>\[ d = \upsilon_{\text{р/з}}t = 3 \cdot 0.0125 =0.0375 \thinspace \text{км} = 37.5 \thinspace \text{м}\]</p>

<p>Шлях, який проплив Петро можна знайти двома способами:</p>
<ol>
<li>Знайти кінцеву швидкiсть Петра i помножити на час $$t$$:</li> <br>


<center><p> $$ \vec{\upsilon}_{п/з} =$$$$ \vec{\upsilon}_{п/р} + \vec{\upsilon}_{р/з}  \Rightarrow $$
$$\upsilon_{п/з} =$$$$ \sqrt{(\vec{\upsilon}_{п/р})^2 + (\vec{\upsilon}_{р/з})^2} =$$$$ \sqrt{3^2 +4^2} =$$$$ 5 \thinspace (м/с) $$ </p>
<p>$$ L = \upsilon_{п/з}t = 5 \cdot 0.0125 = 0.0625 \thinspace \text{км} = 62.5 \thinspace \text{м}$$</p> </center> 

<li>Через вiдомi модулi перемiщень (формула аналогiчна):</li>

<center>$$L = \sqrt{l^2 + d^2} = \sqrt{50^2 +37.5^2}$$$$ = \sqrt{3906.25} = 62.5 \thinspace \text{м}$$</center>
</ol>
  </div>
  <div class="tab-pane" id="answer"><p><b>Вiдповiдь.</b></p>
<p><img src="https://rawgit.com/chudaol/ed-era-book-physics/master/images/chapter_1/10.svg" class="image"/></p>
<p>Шлях, який проплив Петро можна знайти двома способами:</p>
<ol>
<li>Знайти результуючу швидкiсть Петра i помножити на час $$t$$:</li> <br>

<center>
<p>$$ L = \upsilon_{п/з}t = 5 \cdot 0.0125 = 0.0625 \thinspace \text{км} = 62.5 \thinspace \text{м}$$</p> </center> 

<li>Через вiдомi модулi перемiщень:</li> <br>

<center>$$L = \sqrt{l^2 + d^2} = \sqrt{50^2 +37.5^2}$$$$ = \sqrt{3906.25} = 62.5 \thinspace \text{м}$$</center>
</ol>
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
<p>Озером перпендикулярно один до одного пливуть два човни зі швидкостями 3 м/с та 4 м/с відносно берега. Яка швидкість першого човна відносно другого?</p>

<answer correct> 5</answer>
<answer> 0</answer>
<answer> 3</answer>
<answer> 1</answer>
<explanation>

<img width="250" src="https://pp.vk.me/c622718/v622718986/b0be/uqNLXRNM8Lc.jpg"/ class="image">

<p>Нехай швидкість першого човна $$\vec{\upsilon}_1 = 3 \thinspace  м/с$$, другого – $$\vec{\upsilon}_2 = 4 \thinspace м/с$$. Відносну швидкість човнів $$\vec{\upsilon}$$ можна знайти за правилом паралелограма для суми векторів  $$\vec{\upsilon} = \vec{\upsilon}_1 + \vec{\upsilon}_2$$. Модуль (величину) цієї швидкості в цій задачі можна знайти за теоремою Піфагора, оскільки човни рухаються перпендикулярно один до одного:</p>
<p>$$|\thinspace \vec{\upsilon} \thinspace| = \sqrt{(\vec{\upsilon}_1)^2 + (\vec{\upsilon}_2)^2}$$</p>
<p>$$|\thinspace \vec{\upsilon} \thinspace| = \sqrt{3^2 + 4^2} = 5\thinspace м/с$$</p>

</explanation>
</question>
</quiz>