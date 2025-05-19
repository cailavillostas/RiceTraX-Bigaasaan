import '../pages/inventory.css'

function Invent() {
  return (

    <>
    <div class="container">
  
    <aside class="sidebar">
      <div class="logo">☰</div>
      <nav class="nav">
        <div class="nav-item active"><span>🏠</span> Dashboard</div>
        <div class="nav-item"><span>📋</span> Inventory</div>
        <div class="nav-item"><span>💰</span> POS</div>
        <div class="nav-item"><span>🔔</span> Notification</div>
        <div class="nav-item"><span>⚙️</span> Settings</div>
      </nav>
      <div class="logout">↩️ Log out</div>
    </aside>

  
    <main class="main-content">
      <header>
        <h1>Inventory</h1>
        <span class="date">May 15, 2025 11:00 am</span>
      </header>

      <section class="grid">
        <div class="card out-stock">
          <span class="status red"></span>
          <img src="img/sinandomeng.jpg" alt="Sinandomeng"/>
        </div>

        <div class="card in-stock">
          <span class="status green"></span>
          <img src="img/maharlika.jpg" alt="Maharlika"/>
        </div>

        <div class="card in-stock">
          <span class="status green"></span>
          <img src="img/dinorado.jpg" alt="Dinorado"/>
        </div>

        <div class="card in-stock">
          <span class="status green"></span>
          <img src="img/jasmine.jpg" alt="Jasmine"/>
        </div>

        <div class="card in-stock">
          <span class="status green"></span>
          <img src="img/pandan.jpg" alt="Pandan"/>
        </div>

        <div class="card in-stock">
          <span class="status green"></span>
          <img src="img/harvester.jpg" alt="Harvester"/>
        </div>

        <div class="card in-stock">
          <span class="status green"></span>
          <img src="img/miponica.jpg" alt="Miponica"/>
        </div>

        <div class="card low-stock">
          <span class="status yellow"></span>
          <img src="img/super-angelica.jpg" alt="Super Angelica"/>
        </div>
      </section>

      <div class="legend">
        <span><span class="dot green"></span> In Stock</span>
        <span><span class="dot yellow"></span> Low Stock</span>
        <span><span class="dot red"></span> Out of Stock</span>
      </div>

      <div class="actions">
        <button>ADD</button>
        <button>DELETE</button>
        <button>EDIT</button>
      </div>
    </main>
  </div>
    </>

  )
}
export default Invent