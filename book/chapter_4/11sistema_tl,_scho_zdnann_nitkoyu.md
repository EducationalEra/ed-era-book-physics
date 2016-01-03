# Система тiл, що з’єднанi ниткою
<div class="fluidMedia">
<iframe width="560" height="315" src="https://www.youtube.com/embed/0RPBkrEdNVY" frameborder="0" allowfullscreen></iframe>
</div>
<div class="popup">
</div>

<br>
<br>

<div class="space">Перше, що важливо. Якщо сказано, що <b>нитка</b> нерозтяжна, сила натягу $$T$$ в будь-якiй її точцi <b>однакова.</b> За третiм законом Ньютона, вага дорiвнює силi натягу нитки. Виходить, що для даного випадку <span class="p1"><b>вага двох тiл рiзної маси однакова.</b></span> Це дуже важливий концептуальний момент. <span class="p1"><b>Не плутайте масу з вагою!</b></span></div>

<div class="space">Другий момент. Коли ви маєте систему тiл, ви можете розглядати кожне тiло окремо. В англомовнiй лiтературi такий пiдхiд називається <span class="p1"><b>Free body diagram.</b></span></div>

<div class="space"><p class="p3">Напрямимо вiсь $$y$$ вгору та розглянемо кожне тiло окремо</p></div>

<div class="space"><img class="image" width="400" src="https://rawgit.com/chudaol/ed-era-book-physics/master/images/chapter_4/17.png"></div>

<ol>
<li>
<div class="space">Другий закон Ньютона: $$m_1 \vec{g} + \vec{T_{}} = m_1 \vec{a} \Rightarrow -m_1 g + T = m_1 a$$</div>
<div class="space" align="center">$$T = m_1(a+g)$$</div>
</li>
<li>
<div class="space">Другий закон Ньютона: $$m_2 \vec{g} + \vec{T_{}} = m_2 \vec{a} \Rightarrow -m_2 g + T = - m_2 a$$</div>
<div class="space" align="center">$$T = m_2(g - a)$$</div>
</li>
</ol>

<div class="space">Тепер можна прирiвняти сили натягу нитки й отримати прискорення кожного з тіл. Вони, до речi, також однаковi.</div>

<div class="centered-table-wrapper">
<table class="centered-table">
<tr class="eq">
<td class="eq">
<p1>$$m_1(a+g) =$$$$ m_2(g-a) \Rightarrow$$$$ a (m_1 + m_2) =$$$$ g (m_2 - m_1) \Rightarrow$$$$ a = g \dfrac{m_2 - m_1}{m_1 + m_2}$$</p1>
</td>
</tr>
</table></div>

<div class="space">Оцiнимо правильнiсть формули.</div>

<ul>
<li>
<div class="space">Якби <span class="p1"><b>маси були однаковi</b></span>, то система перебувала би в рiвновазi.</div>
<div class="space" align="center">$$m_1 = m_2 \rightarrow a = 0$$</div>
</li>
<li>
<div class="space">Якби <span class="p1"><b>одного тiла взагалi не було</b></span>, то iнше тiло рухалось просто з прискоренням $$\vec{g}$$.</div>
<div align="center">$$m_1 = 0 \rightarrow a = g \dfrac{m_2}{m_2} = g$$</div>
</li>
</ul>

<quiz correctLabel="correct!" incorrectLabel="incorrect!" checkLabel="check ansert">
<question>
<p>Для задачі, що розглядалась, маса ліфту з людиною становить $$200$$ кг, а маса залізного блоку - $$900$$ кг. Знайдіть прискорення ліфта.</p>

<answer>$$4 \ \text{м/с}^2$$</answer> 
<answer>$$5 \ \text{м/с}^2$$</answer>
<answer>$$6 \ \text{м/с}^2$$</answer>
<answer correct>$$7 \ \text{м/с}^2$$</answer>
<explanation>
Прирівнявши сили натягу тросу, отримуємо:
<br>
$$m_1(g + a) = m_2(g - a)$$
<br>
$$200 \cdot (10 + a) = 900 \cdot (10 - a)$$
<br>
$$20 + a = 90 - 9a$$
<br>
$$a = 7 \thinspace \text{м/с}^2$$
</explanation>
</question>
</quiz>