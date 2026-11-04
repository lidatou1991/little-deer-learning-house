(() => {
  if (document.body.classList.contains('library-home') || document.querySelector('.site-ribbon')) return;
  const bar = document.createElement('div');
  bar.className = 'site-ribbon';
  bar.innerHTML = '<div class="site-ribbon-inner"><a class="site-brand" href="./"><span>🦌</span><span>小鹿学习屋</span></a><nav class="site-ribbon-links" aria-label="资料页导航"><a href="./#library">日期与学科筛选</a><a href="about-project.html">项目介绍</a></nav></div>';
  document.body.prepend(bar);
})();
