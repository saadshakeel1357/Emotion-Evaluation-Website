import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Load the data
original_data = pd.read_csv('original_data.csv')

# Basic Data Analysis
print("Summary Statistics:")
print(original_data.describe())

# Calculating overall important statistics
valence_mean = original_data['Valence'].mean()
valence_median = original_data['Valence'].median()
valence_std = original_data['Valence'].std()

arousal_mean = original_data['Arousal'].mean()
arousal_median = original_data['Arousal'].median()
arousal_std = original_data['Arousal'].std()

print(f"\nOverall Valence Statistics:\nMean: {valence_mean}\nMedian: {valence_median}\nStandard Deviation: {valence_std}")
print(f"\nOverall Arousal Statistics:\nMean: {arousal_mean}\nMedian: {arousal_median}\nStandard Deviation: {arousal_std}")

# Calculate statistics for each audio
audio_labels = original_data.columns[1:]  # assuming first column is Participant, next columns are audio labels
for audio in audio_labels:
    audio_valence_mean = original_data.loc[original_data['Audio'] == audio, 'Valence'].mean()
    audio_valence_median = original_data.loc[original_data['Audio'] == audio, 'Valence'].median()
    audio_valence_std = original_data.loc[original_data['Audio'] == audio, 'Valence'].std()
    
    audio_arousal_mean = original_data.loc[original_data['Audio'] == audio, 'Arousal'].mean()
    audio_arousal_median = original_data.loc[original_data['Audio'] == audio, 'Arousal'].median()
    audio_arousal_std = original_data.loc[original_data['Audio'] == audio, 'Arousal'].std()
    
    print(f"\n{audio} Valence Statistics:\nMean: {audio_valence_mean}\nMedian: {audio_valence_median}\nStandard Deviation: {audio_valence_std}")
    print(f"\n{audio} Arousal Statistics:\nMean: {audio_arousal_mean}\nMedian: {audio_arousal_median}\nStandard Deviation: {audio_arousal_std}")

# Distribution of Valence and Arousal
plt.figure(figsize=(14, 6))

plt.subplot(1, 2, 1)
sns.histplot(original_data['Valence'], kde=True, bins=10)
plt.title('Distribution of Valence')

plt.subplot(1, 2, 2)
sns.histplot(original_data['Arousal'], kde=True, bins=10)
plt.title('Distribution of Arousal')

plt.show()

# Trend Analysis
plt.figure(figsize=(14, 6))

plt.subplot(1, 2, 1)
sns.lineplot(x='Participant', y='Valence', data=original_data, ci=None)
plt.title('Trend of Valence over Participants')
plt.xlabel('Participant')
plt.ylabel('Valence')

plt.subplot(1, 2, 2)
sns.lineplot(x='Participant', y='Arousal', data=original_data, ci=None)
plt.title('Trend of Arousal over Participants')
plt.xlabel('Participant')
plt.ylabel('Arousal')

plt.show()

# Correlation Analysis
correlation = original_data[['Valence', 'Arousal']].corr()
print("Correlation between Valence and Arousal:")
print(correlation)

plt.figure(figsize=(8, 6))
sns.heatmap(correlation, annot=True, cmap='coolwarm')
plt.title('Correlation Heatmap')
plt.show()

# Pattern Visualization
sns.pairplot(original_data[['Valence', 'Arousal']])
plt.show()

# Heatmap of Valence and Arousal across different participants and audios
pivot_table = original_data.pivot('Participant', 'Audio', 'Valence')
plt.figure(figsize=(10, 8))
sns.heatmap(pivot_table, annot=True, cmap='coolwarm')
plt.title('Heatmap of Valence')
plt.show()

pivot_table = original_data.pivot('Participant', 'Audio', 'Arousal')
plt.figure(figsize=(10, 8))
sns.heatmap(pivot_table, annot=True, cmap='coolwarm')
plt.title('Heatmap of Arousal')
plt.show()

print("Analysis complete.")
