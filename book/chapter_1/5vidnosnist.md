#Вiдноснiсть швидкостей та перемiщень

Як вже зазначалося, рух та все, що з ним пов’язано – поняття вiдносне. Саме тому вводилося поняття «<b>система вiдлiку</b>» та «<b>тiло вiдлiку</b>». Для того, щоб легко зрозуміти перехід від однієї системи відліку до іншої, розглянемо наступний приклад. Микола рухається у рухомiй системi вiдлiку – у потязi зi швидкiстю та перемiщенням <b><span class="p1">Миколи/потяга</span></b>. Потяг (рухома система вiдлiку) має швидкiсть i перемiщення вiдносно нерухомої системи вiдлiку – землi з позначеннями <span class="p1">Потяга/землi</span>. Тодi встановити рух Миколи вiдносно землi можна за допомогою суми цих двох векторiв.


<img src="https://rawgit.com/chudaol/ed-era-book-physics/master/images/chapter_1/9.png" class="image"/>


Для подiбних задач рекомендуємо вам використовувати такий вид позначень, як зображено вище. Тоді ви не заплутаєтесь при вирішенні задач.



<div class="task-wrap">
<span class="task">Задача 3</span> <b>ПЕТРО ТА РIЧКА ДЕСНА</b>
<div class="task-text">
Одного разу Петро вирiшив переплести Десну. Вiн поплив перпендикулярно до течiї рiчки та берегової лiнiї. Петро хотiв потрапити в ту точку, на яку взяв курс. Але, нажаль, його знесло течiєю. На яку вiдстань вiд бажаної точки знесло Петра та який шлях вiн подолав? Ширина рiчки – $$50$$ м. Швидкiсть течiї рiчки – $$3$$ км/год. Зазвичай Петро плаває у басейнi зi швидкiстю $$4$$ км/год.</br>
<b>Дано:</b> $$\upsilon_{п/р} = 4 \thinspace \text{км/год}, \ \upsilon_{п/з} = 3 \thinspace \text{км/год}, \ l = 50 \thinspace \text{м} = 0.05 \thinspace \text{км}$$</br>
<b>Знайти:</b> $$ d, \ L$$

<img src="https://rawgit.com/chudaol/ed-era-book-physics/master/images/chapter_1/10.svg" class="image"/>


<b><i>Розв'язок.</i></b> Для початку знайдемо, скiльки часу витратив Петро.
\[t=\dfrac{|\thinspace \vec{S}_{п/р} \thinspace|}{|\thinspace \vec{\upsilon}_{п/р} \thinspace|} = \dfrac{l}{\upsilon_{п/з}} = 0.05/4 = 0.0125 \thinspace (\text{год}) \]

<i>Зауважимо, що незалежно вiд швидкостi течiї, час, який витратив би Петро не змiнився. Це вiдбувається тому, що швидкiсть течiї в даному випадку не має нiякого впливу на швидкiсть з якою пливе Петро у перпендикулярному напрямi. Змiнюється шлях, напрям тiла, швидкiсть тiла, але не величина перпендикулярної складової.</i></br>
<p></p>
Вiдстань, на яку знесло Петра: 
\[ d = \upsilon_{\text{р/з}}t = 3 \cdot 0.0125 =0.0375 \thinspace \text{км} = 37.5 \thinspace \text{м}\]

Шлях, який проплив Петро можна знайти двома способами:</br>
<ol>
<li>Знайти результуючу швидкiсть Петра i помножити на час $$t$$:</li></br>


<center> $$ \vec{\upsilon}_{п/з} = \vec{\upsilon}_{п/р} + \vec{\upsilon}_{р/з} \Rightarrow $$
 $$\upsilon_{п/з} = \sqrt{(\vec{\upsilon}_{п/р})^2 + (\vec{\upsilon}_{р/з})^2} = \sqrt{3^2 +4^2} = 5 \thinspace (м/с) $$ </br>
<p> </p>
$$ L = \upsilon_{п/з}t = 5 \cdot 0.0125 = 0.0625 \thinspace \text{км} = 62.5 \thinspace \text{м}$$</center></br>

<li>Через вiдомi модулi перемiщень (формула аналогiчна):</li>
<p> </p>
<center>$$L = \sqrt{l^2 + d^2} = \sqrt{50^2 +37.5^2} = \sqrt{3906.25} = 62.5 \thinspace \text{м}$$</center>
</ol>

</div>
</div>


<quiz correctLabel="correct!" incorrectLabel="incorrect!" checkLabel="check ansert">
<question>
<p>Озером пливуть два човни перпендикулярно один до одного зі швидкостями 3 м/с та 4 м/с відносно берега. Яка швидкість першого човна відносно другого?</p>

<answer correct>5</answer>
<answer>0</answer>
<answer>3</answer>
<answer>1</answer>
<explanation>

<img width="250" src="https://pp.vk.me/c622718/v622718986/b0be/uqNLXRNM8Lc.jpg"/ class="image">

Нехай швидкість першого човна $$\vec{\upsilon}_1 = 3 \thinspace  м/с$$, другого – $$\vec{\upsilon}_2 = 4 \thinspace м/с$$. Відносну швидкість човнів $$\vec{\upsilon}$$ можна знайти за правилом паралелограма для суми векторів  $$\vec{\upsilon} = \vec{\upsilon}_1 + \vec{\upsilon}_2$$. Модуль (величину) цієї швидкості у випадку данної задачі можна знайти за теоремою Піфагора, оскільки човни рухаються перпендикулярно один одному:

\[|\thinspace \vec{\upsilon} \thinspace| = \sqrt{(\vec{\upsilon_1})^2 + (\vec{\upsilon_2})^2}\] 

\[|\thinspace \vec{\upsilon} \thinspace| = \sqrt{3^2 + 4^2} = 5\thinspace м/с\]

</explanation>
</question>
</quiz>