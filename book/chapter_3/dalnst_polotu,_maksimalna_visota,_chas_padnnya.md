# Дальнiсть польоту, максимальна висота, час пiдняття

Розглядаємо вже згадану вище задачу. Тiло кидають в праву сторону зi швидкiстю $$v_0$$ пiд кутом $$\alpha$$ до горизонту. Отримаємо формули для дальностi польоту $$L,$$ максимальної висоти пiдйому $$H,$$ часу пiдняття на максимальну висоту $$t'$$.

<img class="image" width="200" height="200" src="https://rawgit.com/chudaol/ed-era-book-physics/master/images/chapter_3/2.png" />
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
<p style="margin-left:0.7cm;"><span class="p1">1. Час польоту i час пiдняття тiла</span></p>
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