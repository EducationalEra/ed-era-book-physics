# Дальнiсть польоту, максимальна висота, час пiдняття

<div class="space">Розглядаємо вже згадану вище задачу. Тiло кидають у праву сторону зi швидкiстю $$\upsilon_0$$ пiд кутом $$\alpha$$ до горизонту. Отримаємо формули для дальностi польоту $$L,$$ максимальної висоти пiдйому $$H,$$ часу пiдняття на максимальну висоту $$t^\prime$$.</div>

<img class="image" width="250"  src="https://rawgit.com/chudaol/ed-era-book-physics/master/images/chapter_3/5.png" />
<br>
Запишемо рiвняння руху та проекцiй швидкостей.
<br>
<br>
<b>Проекцiя на вiсь $$x$$.</b> Система координат обрана таким чином, що $$x_0 = 0$$. У напрямку вiсi $$x$$ швидкiсть постiйна i дорiвнює проекцiї початкової швидкостi. Проекцiя
початкової швидкостi $$\upsilon_{0x} = \upsilon_0 \cos \alpha.$$
$$
\begin{cases}
x = \upsilon_0 \cos \alpha \cdot t \\
\upsilon_x = \upsilon_0 \cos \alpha
\end{cases}$$
<br>
<b>Проекцiя на вiсь $$y$$.</b> Система координат обрана таким чином, що $$y_0 = 0$$. У напрямку вiсi $$y$$ швидкiсть змiнна, на неї впливає прискорення $$\vec{g}$$, напрямлене в протилежний напрямок до напряму вiсi. Проекцiя початкової швидкостi $$\upsilon_{0y} = \upsilon_0 \sin \alpha.$$
<br>
<div align="center">$$\begin{cases}
y = \upsilon_0 \sin \alpha \cdot t - \dfrac{gt^2}{2}\\
\upsilon_y = \upsilon_0 \sin \alpha - gt
\end{cases}$$</div>
<br>
<ol>
<span class="p1"><b><li>Час польоту i час пiдняття тiла.</b></span></p>
<div class="space">Дальнiсть польоту $$L$$ дорiвнює координатi $$x$$ в той момент, коли координата $$y = 0$$ (в момент приземлення тiла). Прирiвнявши $$y(t) = 0$$ можна вiднайти час польоту тiла $$T.$$</p</div>
<div align="center">$$0 = \upsilon_0 \sin \alpha · T - \dfrac{gT^2}{2}$$</div>
<div align="center">$$T(\dfrac{g}{2}T - \upsilon_0 \sin \alpha) = 0 \Rightarrow \dfrac{g}{2}T - v_0 \sin \alpha = 0$$</div>
<b>Час польоту тiла:</b></p>
<div class="centered-table-wrapper">
<table class="centered-table">
<tr class="eq">
<td class="eq">
<p1>$$T = \dfrac{2\upsilon_0\sin\alpha}{g}$$</p1>
</td>
</tr>
</table></div>
<p></p>

Ми з вами у попереднiй лекцiї доводили те, що час пiдняття тiла дорiвнює часу
спуску. Отже, час пiдняття дорiвнює половинi часу польоту тiла.</p>
<b>Час пiдняття тiла:</b></p>
<div class="centered-table-wrapper">
<table class="centered-table">
<tr class="eq">
<td class="eq">
<p1>$$t^\prime = \dfrac{T}{2} = \dfrac{\upsilon_0\sin\alpha}{g}$$</p1>
</td>
</tr>
</table></div>
<p></p>
</li>
<span class="p1"><b><li>Дальнiсть польоту тiла.</b></span></p>
Як вже зазначалося у попередньому пунктi $$L = x(t) = \upsilon_0 \cos \alpha \cdot T$$. Пiдставляючи час польоту $$T$$ iз попереднього пункту, отримуємо:</p>
<br>
<div align="center">$$L = \dfrac{2 v_0^2 \sin \alpha \cos \alpha}{g}$$</div>
<br>
Iз тригонометрiї: $$2 \sin \alpha \cos \alpha = \sin 2 \alpha.$$</p>
<div class="centered-table-wrapper">
<table class="centered-table">
<tr class="eq">
<td class="eq">
<p1>$$L = \dfrac{\upsilon_0^2 \sin 2 \alpha}{g}$$</p1>
</td>
</tr>
</table></div>
<p></p>
</li>
<br>
<span class="p1"><b><li>Максимальна висота.</b></span></p>
Максимальна висота $$H$$ – координата $$y$$ в момент часу $$t = t'$$ (час пiдйому).</p>
<br>
<div align="center">$$H = y(t^\prime) = \upsilon_0 \sin \alpha \cdot t^\prime - \dfrac{gt'^2}{2}$$</div>
<br>
Пiдставляємо $$t^\prime = \dfrac{\upsilon_0 \sin \alpha}{g}$$ iз попереднього пункту:</p>
<br>
<div align="center">$$H - \dfrac{\upsilon_0^2 \sin^2 \alpha}{g} - \dfrac{\upsilon_0^2 \sin^2 \alpha}{2g}$$</div>
<br>
<b>Максимальна висота:</b></p>
<div class="centered-table-wrapper">
<table class="centered-table">
<tr class="eq">
<td class="eq">
<p1>$$H = \dfrac{\upsilon_0^2 \sin^2 \alpha}{2g}$$</p1>
</td>
</tr>
</table></div>
<p></p>
</li>
</ol>
<br>
<div class="task-wrap">
<span class="task">Задача 2</span> <b>ПЕТРО ТА ГАРМАТА</b>
<div class="task-text">
Петро знайшов у дворi $$152$$-мм гаубицю, взяв з собою та повiз у велике поле, де можна безпечно розважатися з такою "iграшкою". Спершу, він направив пушку пiд кутом $$30^\circ$$, вистрiлив i помiряв час польоту снаряду $$T \approx 24.3 \thinspace \text{c}.$$ Маючи цi данi, вiн обрахував швидкiсть снаряду. Потiм Петро вистрiлив пiд кутами $$60^\circ$$ та $$45^\circ$$ i порiвняв дальностi польоту снарядiв для трьох кутiв, пiд якими стрiляв. Вiн визначив кут, при якому дальнiсть була найбiльшою, а потiм в загальному випадку довiв, що саме при цьому кутi дальнiсть польоту максимальна.
При цьому кутi Петро також визначив максимальну висоту пiдняття заряду. Задоволений отриманими даними, вiн забрав гармату додому. Давайте вiдтворимо експеримент Петра.

<img class="image" width="300"  src="https://rawgit.com/chudaol/ed-era-book-physics/master/images/chapter_3/6.png" />

Для вiдтворення експериментiв будемо використовувати формули, виведення яких здiйснили вище.
<br>
<b>Швидкiсть снаряду</b>
<br>
<p style="margin-left:1cm;">Кут $$\alpha = 30^\circ$$, час польоту $$T \approx 24.3 \thinspace \text{c}.$$</p>
<br>
<div align="center">$$T = \dfrac{2 \upsilon_0 \sin \alpha}{g} \Rightarrow \upsilon_0 = \dfrac{gT}{2\sin\alpha} = \dfrac{9.8 \cdot 24.3}{2 \cdot \sin 30^\circ} \approx 238.1 \ (\text{м/с})$$</div>
<br>
<b>Дальностi польоту</b>
<br>
<p style="margin-left:1cm;">Дальнiсть польоту обраховуємо по формулi:</p>
<br>
<div align="center">$$L = \dfrac{\upsilon_0^2\sin 2\alpha}{g}$$</div><div align="right">$$(1)$$</div>
<p style="margin-left:1cm;">Для кутiв $$30^\circ, 45^\circ, 60^\circ$$ вiдповiдно.</p>
<div align="center">$$L_1 \approx 5000 \thinspace \text{м} = 5 \thinspace \text{км}; \ L_2 \approx 5800 \thinspace \text{м} = 5.8 \thinspace \text{км}; \ L_3 \approx 5000 \thinspace \text{м} = 5 \thinspace \text{км}$$</div>
<br>
<p style="margin-left:1cm;">Порiвнявши, бачимо, що при $$45^\circ$$ дальнiсть польоту найбiльша. Але це була вибiрка з трьох кутiв. У загальному випадку легко показати, що саме при кутi $$45^\circ$$ дальнiсть польоту максимальна. $$L$$ у формулi $$(1)$$ буде максимальним, якщо $$\sin 2 \alpha = 1 \Rightarrow \alpha = 45^\circ.$$</p>
<b>Максимальна висота</b>
<br>
<p style="margin-left:1cm;">Маємо кут $$\alpha = 45^\circ$$ та формулу для визначення максимальної висоти:</p>
<br>
<div align="center">$$H = \dfrac{\upsilon_0^2\sin^2\alpha}{2g} = \dfrac{238.1^2 \sin^2 45^\circ}{2 · 9.8} \approx 1450 \ (\text{м})$$</div>
</div>
</div>

<quiz correctLabel="correct!" incorrectLabel="incorrect!" checkLabel="check ansert">
<question>
<p>Тіло кинули під кутом $$50^\circ$$ та воно пролетіло певну відстань. При якому куті тіло пролетить таку ж саму відстань?</p>
 
<answer>$$30^\circ$$</answer>
<answer>$$35^\circ$$</answer>
<answer correct>$$40^\circ$$</answer>
<answer>$$60^\circ$$</answer>
<explanation>
Користуючись тригонометричною формулою зведення: $$\sin 2 \cdot 50^\circ = \sin 100^\circ = \cos 10^\circ = \sin 80^\circ \Rightarrow \sin 2 \alpha = 80^\circ \Rightarrow \sin \alpha = 40^\circ .$$
</explanation>
</question>
</quiz>