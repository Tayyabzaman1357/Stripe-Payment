import React from "react";

export default function Plans() {

  const buyPlan = async (priceId) => {
    const res = await fetch("http://localhost:3000/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ priceId }),
    });

    const data = await res.json();

    if (data.url) {
      window.location.href = data.url;
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={{ textAlign: "center" }}>Choose Your Plan</h1>

      <div style={styles.cardContainer}>

        {/* SILVER */}
        <div style={styles.card}>
          <h2>🥈 Silver</h2>
          <p>Basic features</p>
          <h3>$10</h3>
          <button
            style={styles.btn}
            onClick={() => buyPlan("price_1Tkiuy8iWZmuqqSYKlx200KF")}
          >
            Buy Silver
          </button>
        </div>

        {/* STANDARD */}
        <div style={styles.card}>
          <h2>⭐ Standard</h2>
          <p>Most popular plan</p>
          <h3>$20</h3>
          <button
            style={styles.btn}
            onClick={() => buyPlan("price_1TkivI8iWZmuqqSY9kYl3FlO")}
          >
            Buy Standard
          </button>
        </div>

        {/* PREMIUM */}
        <div style={styles.card}>
          <h2>💎 Premium</h2>
          <p>All features unlocked</p>
          <h3>$30</h3>
          <button
            style={styles.btn}
            onClick={() => buyPlan("price_1TkivV8iWZmuqqSYU7wzoWa7")}
          >
            Buy Premium
          </button>
        </div>

      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    fontFamily: "Arial",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "30px",
    flexWrap: "wrap",
  },
  card: {
    width: "250px",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    textAlign: "center",
    backgroundColor: "#fff",
  },
  btn: {
    marginTop: "10px",
    padding: "10px 15px",
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};