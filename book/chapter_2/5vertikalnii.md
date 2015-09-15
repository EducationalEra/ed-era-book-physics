# Вертикальний рух пiд дiєю сили тяжiння

<span class="p1">Закон всесвiтнього тяжiння</span> – закон, що описує гравiтацiйну взаємодiю (притягання) тiл. У подальшому закон буде розглянуто бiльш детально.

<div class="eoz-wrap">
<span class="eoz">Означення</span>
<div class="eoz-text">
<b>Прискорення вiльного падiння</b> $$\vec{g}$$ – прискорення, що отримує тiло внаслiдок
гравiтацiйного притягання Землi.
<p></p>

Для спрощення вирiшення кiнематичних задач
<ol>
<li>Бiля поверхнi Землi це прискорення вважають константою (хоча фiзично це прискорення залежить вiд багатьох факторiв).</li>

\[g \approx 9,8 \thinspace \dfrac{\text{м}}{\text{c}^2}\]

<li>Опором повiтря нехтують. За таких умов падiння тiла називають <b>вiльним</b>. Єдине прискорення, що дiє на тiло в такому випадку – прискорення $$\vec{g}$$, напрямлене вертикально вниз.</li>
</ol>
</div>
</div>

При вертикальному русi у бiльшостi пiдручникiв вiсь направляють вгору. В такому випадку рiвняння руху виглядає таким чином:

$$x=x_0+\upsilon_{0x}t-\dfrac{at^2}{2}$$

Є декiлька цiкавих фактiв, пов’язаних з рухом, при якому нехтують опором повiтря.

<ol>
<li><p1>Час пiдняття тiла з одного рiвня до iншого дорiвнює часу спуску з другого на перший.</p1>
<table style="width:100%"><tr border ="0"><td><img class="image"  src="https://rawgit.com/chudaol/ed-era-book-physics/master/images/chapter_2/8.svg" /></td><td width="60%"><b>А.</b> Петро пiдкидає м’яч вертикально вгору з початковою швидкiстю $$\upsilon_0$$. 

Рiвняння руху 

\[x=x_0+\upsilon_{0x}t-\dfrac{at^2}{2}\] 

Початкову точку приймемо за нуль, кiнцеву – $$H_{max}$$.

\[H_{max} = \upsilon_{0x}t-\dfrac{at^2}{2}\]

Позначимо час пiдйому $$t'$$ i знайдемо його з умови рiвностi нулю швидкостi у найвищiй точцi:

\[\upsilon(t')=\upsilon_0-gt'=0 \Rightarrow \boxed{t'=\dfrac{\upsilon_{0x}}{g}}\]

Пiдставимо у вираз для $$H_{max}: H_{max} = \dfrac{\upsilon^2_{0x}}{2g}$$</td></tr></table>
<table style="width:100%"><tr><td><img class="image"  src="https://rawgit.com/chudaol/ed-era-book-physics/master/images/chapter_2/9.svg" /></td><td width="60%" border="0"><b>Б.</b> Розглядаємо спуск м’яча. Тодi $$\upsilon_{0x}=0,x_0=H_{max}$$. Позначимо час спуску $$t''$$ i виразимо $$H_{max}$$ iз рiвняння руху:

\[x(t'')=H_{max} - \dfrac{gt''^2}{2}=0\Rightarrow H_{max} =\dfrac{gt''^2}{2}\]

Прирiвняємо $$H_{max}$$ з пунктiв <b>А</b> та <b>Б</b>:

\[\dfrac{\upsilon^2_{0x}}{2g}=\dfrac{gt''^2}{2} \Rightarrow t''^2=\dfrac{\upsilon^2_{0x}}{g^2} \Rightarrow \boxed{t''=\dfrac{\upsilon_{0x}}{g}}\]

Отже, справдi, час пiдйому з однiєї точки в iншу дорiвнює часу спуску.</td></tr></table></li>

<li><p1>Модулi швидкостей тiла на визначеному рiвнi пiд час пiдйому та спуску рiвнi.</p1>

Користуючись результатами попереднього пункту, ми вже визначили час спуску. Тодi швидкiсть у точцi, з якої починався рух, пiсля спуску:

$$\upsilon_x(t'')=0-gt''=-g \cdot \dfrac{\upsilon_{0x}}{g}= -\upsilon_{0x}$$

Знак мiнус вказує на те, що швидкiсть напрямлена протилежно напрямку вiсi.</li>

</ol>

<div class="add-wrap">
<span class="add">Збереження енергiї</span>
<div class="add-text">
Обидва попереднi пункти можна було б отримати користуючись законом збереження енергiї (ви його будете розглядати далi в курсi). А поки дехто з вас не знає цього закону, подумайте логічно. При умовi, якщо ми нехтуємо впливом опору повiтря та будь-яких стороннiх тiл, зрозуміло, що енергiя, яку надав м’ячу Петро, не може зникнути внiкуди $$\Rightarrow$$ Знаходячись в фiзично однакових станах (висота) у тiла повинна бути така ж величина швидкостi.
</div>
</div>

<quiz correctLabel="correct!" incorrectLabel="incorrect!" checkLabel="check ansert">
<question>
<p>Петро жбурляє мяч угору. Початкова швидкiсть \(\upsilon_0\) = 17,64 м/с. Прискорення вiльного падiння \(g\) = 9,8 \(\frac{м}{с^2}\). Визначити максимальну висоту пiдняття м'яча над рiвнем, з якого Петро його кинув.</p>
<answer>13,7 м</answer>
<answer correct>15,9 м</answer>
<answer>18,1 м</answer>
<answer>14,2 м</answer>
<explanation>
$$H_{max}=\dfrac{\upsilon^{2}_0}{2g}=\dfrac{17,64 \cdot 17,64}{2 \cdot 9,8} = 15,876 м$$
</explanation>
</question>

<question>
<pВизначити весь час руху м’яча до моменту, коли Петро його знову зловить.</p>
<answer correct>3,6 c</answer>
<answer>3,2 c</answer>
<answer>2,5 c</answer>
<answer>1,8 c</answer>
<explanation>
<p>Час пiдйому:</p>
$$t^\prime = \upsilon_0g = 17,64 \cdot 9,8= 1,8 \thinspace c$$
<p>Повний час = час пiдйому + час спуску, з iншого боку час пiдняття = часу спуску.</p>
<p>Отже, повний час</p>
<p>$$t=2t^\prime=3,6 \thinspace c$$</p>
</explanation>
</question>
</quiz>

