import { Ionicons } from "@expo/vector-icons";
import {
  Alert,
  Button,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

const COLORS = {
  background: "#F9F4EF",
  card: "#FFFFFF",
  text: "#2E1515",
  subtext: "#4A3A3A",
  red: "#C8102E",
  progressTrack: "#D6D0D0",
  progressFill: "#5A4A4A",
  activeTab: "#F5C6CF",
  orange: "#E8751A",
};

const GRID_ITEMS = [
  { label: "Offers", icon: "🏷️" },
  { label: "Delivery", icon: "🛵" },
  { label: "TimShop", icon: "🛍️" },
  { label: "Community", icon: "❤️" },
  { label: "Tims Word Challenge", icon: "🔠" },
  { label: "Give", icon: "🎁" },
  { label: "Restaurant Locator", icon: "📍" },
  { label: "Join our Team", icon: "🤝" },
];

const Index = () => {
  const handleAlert = () => {
    Alert.alert("Alert button pressed.");
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Top icon row */}
        <View style={styles.topBar}>
          <Ionicons name="bag-add-outline" size={28} color={COLORS.text} />
          <Ionicons
            name="person-circle-outline"
            size={34}
            color={COLORS.text}
            style={{ marginLeft: 18 }}
          />
        </View>
        {/* Welcome Message */}
        <Text style={styles.greeting}>Good afternoon, {"\n"}Name</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.bannerScroll}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        >
          <View style={styles.ctCard}>
            <Text style={styles.ctLogo}>✕</Text>
            <View style={{ flex: 1, marginLeft: 14 }}>
              <Text style={styles.ctTitle}>Earn CT Money®</Text>
              <Text style={styles.ctBody}>
                Link your accounts to earn Canadian Tire Money® on eligible
                purchases.
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={22} color={COLORS.text} />
          </View>
        </ScrollView>

        <View style={styles.cardRow}>
          <View style={styles.bigCard}>
            <Text style={styles.cardTitle}>Order</Text>
            <Text style={styles.orderEmoticon}>🍩</Text>
            <Text style={styles.cardCaption}>
              Start an Order for your Tims favourites.
            </Text>
          </View>

          <View style={styles.bigCard}>
            <Text style={styles.cardTitle}>Rewards</Text>
            <Text style={styles.points}>5,700 pts</Text>

            <View style={styles.progressWrapper}>
              <View style={styles.progressTrack}>
                <View style={styles.progressFill} />
              </View>

              <View style={styles.progressBadge}>
                <Text style={styles.progressBadgeChar}>5</Text>
              </View>
            </View>
            <Text style={styles.cardCaption}>You're banking your points.</Text>
          </View>
        </View>
        <View style={styles.grid}>
          {GRID_ITEMS.map((item) => (
            <View key={item.label} style={styles.gridItem}>
              <View style={styles.gridTile}>
                <Text style={styles.gridEmoji}>{item.icon}</Text>
              </View>
              <Text style={styles.gridLabel}>{item.label}</Text>
            </View>
          ))}
        </View>

        {/*Alert Button */}
        <View style={styles.alertButtonWrapper}>
          <Button title="Alert" color={COLORS.red} onPress={handleAlert} />
        </View>
      </ScrollView>

      {/* bottom tab */
      /* HOME Icon */}
      <View style={styles.tabBar}>
        <View style={styles.tabItem}>
          <View style={styles.tabActive}>
            <Ionicons name="home-outline" size={28} color={COLORS.red} />
          </View>

          <Text style={[styles.tabLabel, { color: COLORS.red }]}>Home</Text>
        </View>

        {/* SCAN Icon */}
        <View style={styles.tabItem}>
          <Ionicons name="qr-code" size={28} color={COLORS.text} />
          <Text style={styles.tabLabel}>Scan</Text>
        </View>

        {/* Discover */}
        <View style={styles.tabItem}>
          <Ionicons name="sparkles-outline" size={28} color={COLORS.text} />
          <Text style={styles.tabLabel}>Discover</Text>
        </View>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  bannerScroll: {
    flexGrow: 0,
  },

  scrollContent: {
    paddingTop: 56,
    paddingBottom: 24,
  },

  topBar: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  greeting: {
    fontSize: 32,
    fontWeight: "800",
    color: COLORS.text,
    lineHeight: 40,
    paddingHorizontal: 20,
    marginTop: 18,
    marginBottom: 18,
  },

  ctCard: {
    width: 330,
    height: 110,
    backgroundColor: COLORS.card,
    borderRadius: 18,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginRight: 14,
  },

  ctLogo: {
    fontSize: 44,
    fontWeight: "900",
    color: COLORS.red,
  },

  ctTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.text,
  },

  ctBody: {
    fontSize: 14,
    color: COLORS.subtext,
    marginTop: 2,
  },

  /*   promoCard: {
    width: 120,
    height: 110,
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
    backgroundColor: COLORS.orange,
    alignItems: "center",
    justifyContent: "center",
  }, */

  //Order and Rewards
  cardRow: {
    flexDirection: "row",
    paddingHorizontal: 16,
    marginTop: 22,
    gap: 14,
  },

  bigCard: {
    flex: 1,
    height: 190,
    backgroundColor: COLORS.card,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 16,
    justifyContent: "space-between",
    shadowColor: "#000000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.text,
  },

  cardCaption: {
    fontSize: 14,
    textAlign: "center",
    color: COLORS.subtext,
  },

  orderEmoticon: {
    fontSize: 34,
    textAlign: "center",
  },

  points: {
    fontSize: 32,
    fontWeight: "800",
    textAlign: "center",
    color: COLORS.text,
  },

  progressWrapper: {
    justifyContent: "center",
    marginVertical: 4,
  },

  progressTrack: {
    height: 10,
    borderRadius: 5,
    backgroundColor: COLORS.progressTrack,
    overflow: "hidden",
  },

  progressFill: {
    width: "62%",
    height: "100%",
    backgroundColor: COLORS.progressFill,
  },

  progressBadge: {
    position: "absolute",
    left: "55%",
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.card,
    borderWidth: 3,
    borderColor: COLORS.progressFill,
    alignItems: "center",
    justifyContent: "center",
  },

  progressBadgeChar: {
    fontSize: 14,
    fontWeight: "700",
    color: COLORS.text,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 8,
    marginTop: 26,
  },

  gridItem: {
    width: "25%",
    alignItems: "center",
    marginBottom: 20,
  },

  gridTile: {
    width: 74,
    height: 74,
    backgroundColor: COLORS.card,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },

  gridEmoji: {
    fontSize: 32,
  },

  gridLabel: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    color: COLORS.text,
  },

  alertButtonWrapper: {
    marginHorizontal: 40,
    marginTop: 16,
    borderRadius: 8,
    overflow: "hidden",
  },

  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: COLORS.card,
    paddingTop: 12,
    paddingBottom: 28,
  },

  tabItem: {
    alignItems: "center",
    width: 100,
  },

  tabActive: {
    backgroundColor: COLORS.activeTab,
    paddingHorizontal: 22,
    paddingVertical: 8,
    borderRadius: 20,
  },

  tabLabel: {
    marginTop: 4,
    fontSize: 14,
    fontWeight: "700",
    color: COLORS.text,
  },
});
