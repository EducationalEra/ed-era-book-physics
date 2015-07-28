# Дальнiсть польоту, максимальна висота, час пiдняття

Розглядаємо вже згадану вище задачу. Тiло кидають в праву сторону зi швидкiстю $$v_0$$ пiд кутом $$\alpha$$ до горизонту. Отримаємо формули для дальностi польоту $$L,$$ максимальної висоти пiдйому $$H,$$ часу пiдняття на максимальну висоту $$t'$$.

<img class="image" width="200" height="200" src="https://rawgit.com/chudaol/ed-era-book-physics/master/images/chapter_3/5.png" />
<br>
Запишемо рiвняння руху та проекцiй швидкостей.
<br>
<br>
<b>Проекцiя на вiсь $$x$$.</b> Система координат обрана таким чином, що $$x_0 = 0$$. У напрямку вiсi $$x$$ швидкiсть постiйна i дорiвнює проекцiї початкової швидкостi. Проекцiя
початкової швидкостi $$v_{0x} = v_0 \cos \alpha$$.
$$
\begin{cases}
x = v_0 \cos \alpha · t\\
v_x = v_0 \cos \alpha
\end{cases}$$
<br>
<b>Проекцiя на вiсь $$y$$.</b> Система координат обрана таким чином, що $$y_0 = 0$$. У напрямку вiсi $$y$$ швидкiсть змiнна, на неї впливає прискорення $$\vec{g}$$, напрямлене в протилежний напрямок до напряму вiсi. Проекцiя початкової швидкостi $$v_{0y} = v_0 \sin \alpha$$.
<br>
<div align="center">$$\begin{cases}
y = v_0 \sin \alpha · t - \dfrac{gt^2}{2}\\
v_y = v_0 \sin \alpha - gt
\end{cases}$$</div>
<br>
<p style="margin-left:0.6cm;"><span class="p1">1. Час польоту i час пiдняття тiла</span></p>
<p style="margin-left:1cm;">Дальнiсть польоту $$L$$ дорiвнює координатi $$x$$ в той момент, коли координата $$y = 0$$ (в момент приземлення тiла). Прирiвнявши $$y(t) = 0$$ можна вiднайти час польоту тiла $$T$$</p>
<br>
<div align="center">$$0 = v_0 \sin \alpha · T - \dfrac{gT^2}{2}$$</div>
<br>
<div align="center">$$T(\dfrac{g}{2}T - v_0 \sin \alpha) = 0 \Rightarrow \dfrac{g}{2}T - v_0 \sin \alpha = 0$$</div>
<br>
<p style="margin-left:1cm;"><b>Час польоту тiла:</b></p>
<div class="centered-table-wrapper">
<table class="centered-table">
<tr class="eq">
<td class="eq">
<p1>$$T = \dfrac{2v_0\sin\alpha}{g}$$</p1>
</td>
</tr>
</table></div>
<p></p>
<br>
<p style="margin-left:1cm;">Ми з вами у попереднiй лекцiї доводили те, що час пiдняття тiла дорiвнює часу
спуску. Отже, час пiдняття дорiвнює половинi часу польоту тiла.</p>
<br>
<p style="margin-left:1cm;"><b>Час пiдняття тiла:</b></p>
<div class="centered-table-wrapper">
<table class="centered-table">
<tr class="eq">
<td class="eq">
<p1>$$t' = \dfrac{T}{2} = \dfrac{v_0\sin\alpha}{g}$$</p1>
</td>
</tr>
</table></div>
<p></p>
<br>
<p style="margin-left:0.6cm;"><span class="p1">2. Дальнiсть польоту тiла</span></p>
<p style="margin-left:1cm;">Як вже зазначалося у попередньому пунктi $$L = x(t) = v_0 \cos \alpha · T$$. Пiдставляючи час польоту $$T$$ iз попереднього пункту, отримуємо</p>
<br>
<div align="center">$$L = \dfrac{2 v_0^2 \sin \alpha \cos \alpha}{g}$$</div>
<br>
<p style="margin-left:1cm;">Iз тригонометрiї: $$2 \sin \alpha \cos \alpha = \sin 2 \alpha$$</p>
<br>
<div class="centered-table-wrapper">
<table class="centered-table">
<tr class="eq">
<td class="eq">
<p1>$$L = \dfrac{v_0^2 \sin 2 \alpha}{g}$$</p1>
</td>
</tr>
</table></div>
<p></p>
<br>
<p style="margin-left:0.6cm;"><span class="p1">3. Максимальна висота</span></p>
<p style="margin-left:1cm;">Максимальна висота $$H$$ - координата 𝑦 в момент часу $$t = t'$$ (час пiдйому).</p>
<br>
<div align="center">$$H = y(t') = v_0 \sin \alpha · t' - \dfrac{gt'^2}{2}$$</div>
<br>
<p style="margin-left:1cm;">Пiдставляємо $$t' = \dfrac{v_0 \sin \alpha}{g}$$ iз попереднього пункту</p>
<br>
<div align="center">$$H - \dfrac{v_0^2 \sin^2 \alpha}{g} - \dfrac{v_0^2 \sin^2 \alpha}{2g}$$</div>
<br>
<p style="margin-left:1cm;"><b>Максимальна висота:</b></p>
<div class="centered-table-wrapper">
<table class="centered-table">
<tr class="eq">
<td class="eq">
<p1>$$H = \dfrac{v_0^2 \sin^2 \alpha}{2g}$$</p1>
</td>
</tr>
</table></div>
<p></p>
<br>
<div class="task-wrap">
<span class="task">Задача 2</span> <b>ПЕТРО ТА ГАРМАТА</b>
<div class="task-text">
Петро знайшов у дворi 152-мм гаубицю. Вiн її взяв з собою та повiз у велике поле, де можна безпечно розважатися з такою "iграшкою". Перше, що вiн зробив, направив пушку пiд кутом 30º, вистрiлив i помiряв час польоту снаряду $$T \approx 24.3c$$. Маючи цi даннi, вiн обрахував швидкiсть снаряду. Потiм вiн вистрiлив пiд кутами 60º та 45º i порiвняв дальностi польоту снарядiв для трьох кутiв, пiд якими стрiляв. Вiн визначив кут, при якому дальнiсть була найбiльшою, а потiм в загальному випадку довiв, що саме при цьому кутi дальнiсть польоту максимальна.
При цьому кутi Петро також визначив максимальну висоту пiдняття заряду. Задоволений отриманими даними, вiн забрав гармату додому. Давайте вiдтворимо експеримент Петра.

<img class="image" width="200" height="200" src="https://rawgit.com/chudaol/ed-era-book-physics/master/images/chapter_3/6.png" />

Для вiдтворення експериментiв будемо використовувати формули, виведення яких здiйснили вище.
<br>

<b>Швидкiсть снаряду</b>