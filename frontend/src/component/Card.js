  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} style={{ color: "gold" }} />);
    }

    if (halfStar) {
      stars.push(<FaStarHalfAlt key="half" style={{ color: "gold" }} />);
    }

    while (stars.length < 5) {
      stars.push(<FaRegStar key={stars.length} style={{ color: "gold" }} />);
    }

    return stars;
  };
