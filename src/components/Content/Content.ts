const Content = {
  render() {
    return `<div class="mt-5 max-w-6xl mx-auto">
    <p>
      Hello xin chào tất cả mọi người, mình là
      <a href=${
        import.meta.env.VITE_FB_URL
      } target="_blank" class="hover:underline">Tuân</a>.
      Với tiêu chí
      <b>UY TÍN</b> số 1 Việt Nam, mình nhận hỗ trợ quét mã Wechat cho tất cả anh/chị/bạn nào có nhu cầu ạ
    </p>
    <p class="mt-1">CAM KẾT:</p>
    <ul class="list-disc">
      <li>Nói <b>KHÔNG</b> với scam, lừa đảo</li>
      <li><b>UY TÍN</b> số 1 Việt Nam</li>
    </ul>
    <p class="mt-3">Dưới đây là một số giao dịch của mình</p>

    <div class="mt-3 mb-6">
      <p>1. Giao dịch số 1</p>
      <img src="/images/anh-giao-dich-1.jpeg" alt="Ảnh giao dịch số 1" class="w-96 mx-auto" />
    </div>

    <div class="mt-3 mb-6">
      <p>2. Giao dịch số 2</p>
      <img src="/images/anh-giao-dich-1.jpeg" alt="Ảnh giao dịch số 1" class="w-96 mx-auto" />
    </div>
    </div>`;
  },
};

export default Content;
