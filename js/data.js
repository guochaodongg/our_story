/* ============================================================
 *  我们的回忆 · 数据文件
 *  你只需要修改下面这些内容，网页就会自动更新。
 *  每项说明：
 *    name  : 标题（必填）
 *    date  : 时间/日期（选填）
 *    desc  : 一句话描述（选填）
 *    emoji : 没有照片时显示的表情（选填）
 *    img   : 照片路径，例如 "image/food/lvcha.jpg"（选填，留空则显示 emoji；路径相对于 index.html，用 "image/..." 而非 "../image/..."）
 * ============================================================ */

const MEMORY_DATA = {
  // 首页文字
  heroTitle: "我们的故事",
  heroSubtitle: "记录与你在一起的每一个瞬间 ❤",
  footerText: "Made with ❤ for you",

  // 1) 一起去过的地方
  places: {
    title: "一起去过的地方",
    desc: "走过的路，看过的风景，都是我们的独家记忆。",
    items: [
      { name: "西湖", date: "2023.05", desc: "断桥边牵手散步，看晚霞落进湖里。", emoji: "🏞️" },
      { name: "海边小城", date: "2023.08", desc: "踩着浪花追日落，吃了海鲜大排档。", emoji: "🌊", img: "image/places/shuangyuewan.jpg" },
      { name: "山顶露营", date: "2024.04", desc: "半夜裹着同一条毯子数星星。", emoji: "⛺" },
      { name: "古镇漫游", date: "2024.10", desc: "青石板路、糖水铺子，慢悠悠的一整天。", emoji: "🏮" },
      { name: "迪士尼", date: "2025.02", desc: "烟花下你笑得比城堡还亮。", emoji: "🎡" },
      { name: "下次旅行", date: "待定", desc: "把想去的地方一个个打卡。", emoji: "✈️" },
    ],
  },

  // 2) 一起吃过的美食
  food: {
    title: "一起吃过的美食",
    desc: "没有什么是一顿饭解决不了的，如果有，就两顿。",
    items: [
      { name: "绿茶餐厅", date: "2026.05", desc: "你被辣得直吸气还说再来一锅。", emoji: "🍲", img: "image/food/lvcha.jpg" },
      { name: "老碗会", date: "2026.04", desc: "你被辣得直吸气还说再来一锅。", emoji: "🍲", img: "image/food/laowanhui.jpg" },
      { name: "街角糖水", date: "2023.06", desc: "每周三的约定，双皮奶加红豆。", emoji: "🍧" },
      { name: "她做的饭", date: "2023.11", desc: "虽然有点咸，但我全吃光了。", emoji: "🍳" },
      { name: "生日蛋糕", date: "2024.01", desc: "你许的愿我偷偷记下了。", emoji: "🎂" },
      { name: "深夜烧烤", date: "2024.07", desc: "加完班也要一起撸串的快乐。", emoji: "🍢" },
      { name: "想一起尝的", date: "待定", desc: "那家排队三小时的网红店。", emoji: "🍜" },
    ],
  },

  // 3) 一起做过的事
  activities: {
    title: "一起做过的事",
    desc: "平凡日子里，因为你而闪闪发光的那些事。",
    items: [
      { name: "第一次看电影", date: "2023.02", desc: "你哭得比我惨，我递了三张纸巾。", emoji: "🎬" },
      { name: "一起养绿植", date: "2023.09", desc: "多肉被我们养得圆滚滚。", emoji: "🪴" },
      { name: "深夜散步", date: "经常", desc: "绕着小区走三圈也不嫌累。", emoji: "🌙" },
      { name: "拼了一幅拼图", date: "2024.05", desc: "一千块，拼了整整两个周末。", emoji: "🧩" },
      { name: "看演唱会", date: "2024.12", desc: "人海里我们唱同一句歌词。", emoji: "🎤" },
      { name: "拍立得合照", date: "一直", desc: "冰箱上已经贴满了。", emoji: "📸" },
    ],
  },

  // 4) 未来的规划
  future: {
    title: "未来的规划",
    desc: "想把每一个「以后」都写进现实里。",
    items: [
      { name: "一起去旅行", when: "2026 暑假", desc: "计划去一次海边，住一晚海景房。" },
      { name: "养一只猫", when: "明年", desc: "挑一只黏人的小橘，名字都想好了。" },
      { name: "存钱买房", when: "三年内", desc: "属于我们的小窝，要有大落地窗。" },
      { name: "去看一次极光", when: "某天", desc: "在雪地里抱紧彼此的那一种浪漫。" },
      { name: "求婚", when: "准备好了", desc: "想在某个普通的日子，给你不普通的承诺。" },
    ],
  },
};
