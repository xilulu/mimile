<template>
    <div class="m-index">
      <form class="yo-search">
          <label class="action">
            <i class="yo-ico yo-ico-suggest"></i>
            <input type="text" class="input" placeholder="维骨力">
            </label>
          <span class="yo-btn yo-ico"></span>
      </form>
        <section>
             <router-view></router-view>
        </section>
        <nav>
             <ul>
            <!--    <li class="active yo-ico"><router-link to='/board'>&#xe6b8;<b>首页</b></router-link></li>
                <li class="yo-ico"><router-link to='/list'>&#xe7da;<b>分类</b></router-link></li>
                <li class="yo-ico"><router-link to='/car'>&#xe78b;<b>购物车</b></router-link></li>
                <li class="yo-ico"><router-link to='/mine'>&#xe78b;<b>我的</b></router-link></li>-->
                <router-link tag="li" to="/board" class="yo-ico" active-class="active">
                     <span>&#xe6b8;<b>首页</b></span>
                </router-link>
                <router-link tag="li" to="/list" class="yo-ico" active-class="active">
                     <span>&#xe7da;<b>分类</b></span>
                </router-link>
                 <router-link tag="li" to="/car" class="yo-ico" active-class="active">
                     <span>&#xe78b;<b>购物车</b></span>
                </router-link>
                 <router-link tag="li" to="/mine" class="yo-ico" active-class="active">
                     <span>&#xe78b;<b>我的</b></span>
                </router-link>
            </ul>
        </nav>
    </div>
</template>
